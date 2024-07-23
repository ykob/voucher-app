import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { prisma } from '~/prisma';
import { generateTokens } from '~/utils/jwt';

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

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  const jti = uuidv4();
  const { accessToken, refreshToken } = generateTokens(user.id, jti);

  await prisma.refreshToken.create({
    data: {
      id: jti,
      hashedToken: refreshToken,
      userId: user.id,
    },
  });

  return c.json({ accessToken, refreshToken });
});

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

auth.post('/login', zValidator('json', loginSchema), async (c) => {
  const { email, password } = c.req.valid('json');
});
