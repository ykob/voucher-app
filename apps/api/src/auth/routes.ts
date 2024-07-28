import { zValidator } from '@hono/zod-validator';
import bcryptjs from 'bcryptjs';
import { Hono } from 'hono';
import { setCookie } from 'hono/cookie';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { prisma } from '~/prisma';
import {
  createUserByEmailAndPassword,
  findUserByEmail,
} from '~/users/services.js';
import { generateTokens } from '~/utils/jwt';
import { addRefreshTokenToWhitelist } from './services.js';

export const auth = new Hono();

const registerSchema = z.object({
  email: z.string(),
  password: z.string(),
});

auth.post('/register', zValidator('json', registerSchema), async (c) => {
  const { email, password } = c.req.valid('json');

  if (!email || !password) {
    return c.json({ message: 'Email and password are required.' });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return c.json({ message: 'Email already in use.' });
  }

  const user = await createUserByEmailAndPassword(email, password);
  const jti = uuidv4();
  const { accessToken, refreshToken } = generateTokens(user.id, jti);

  await addRefreshTokenToWhitelist({
    jti,
    refreshToken,
    userId: user.id,
  });
  setCookie(c, 'accessToken', accessToken);
  setCookie(c, 'refreshToken', refreshToken);

  return c.json({ accessToken, refreshToken });
});

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

auth.post('/login', zValidator('json', loginSchema), async (c) => {
  const { email, password } = c.req.valid('json');

  if (!email || !password) {
    return c.json({ message: 'Email and password are required.' });
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return c.json({ message: 'Invalid email or password.' });
  }

  const validPassword = await bcryptjs.compare(password, user.password);

  if (!validPassword) {
    return c.json({ message: 'Invalid email or password.' });
  }

  const jti = uuidv4();
  const { accessToken, refreshToken } = generateTokens(user.id, jti);

  await addRefreshTokenToWhitelist({
    jti,
    refreshToken,
    userId: user.id,
  });
  setCookie(c, 'accessToken', accessToken);
  setCookie(c, 'refreshToken', refreshToken);

  return c.json({ accessToken, refreshToken });
});
