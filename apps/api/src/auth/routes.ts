import { zValidator } from '@hono/zod-validator';
import bcryptjs from 'bcryptjs';
import { Hono } from 'hono';
import { setCookie } from 'hono/cookie';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { logger } from '~/middlewares.js';
import { prisma } from '~/prisma';
import {
  createUserByEmailAndPassword,
  findUserByEmail,
  findUserById,
} from '~/users/services.js';
import { hashToken } from '~/utils/hash-token.js';
import { generateTokens } from '~/utils/jwt.js';
import {
  addRefreshTokenToWhitelist,
  deleteRefreshToken,
  findRefreshToken,
  revokeTokens,
} from './services.js';

export const auth = new Hono();

const registerSchema = z.object({
  email: z.string(),
  password: z.string(),
});

auth.use(logger);

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

const refreshTokenSchema = z.object({
  refreshToken: z.string(),
});

auth.post(
  'refresh-token',
  zValidator('json', refreshTokenSchema),
  async (c) => {
    const { refreshToken } = c.req.valid('json');

    if (!refreshToken) {
      throw new Error('Missing refresh token.');
    }

    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);

    if (typeof payload === 'string' || payload.jti === undefined) {
      throw new Error('Invalid refresh token.');
    }

    const savedRefreshToken = await findRefreshToken(payload.jti);

    if (!savedRefreshToken || savedRefreshToken.revoked === true) {
      throw new Error('Unauthorized.');
    }

    const hashedToken = hashToken(refreshToken);

    if (hashedToken !== savedRefreshToken.hashedToken) {
      throw new Error('Unauthorized.');
    }

    const user = await findUserById(payload.userId);

    if (!user) {
      throw new Error('Unauthorized.');
    }

    await deleteRefreshToken(savedRefreshToken.id);

    const jti = uuidv4();
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      user.id,
      jti,
    );

    await addRefreshTokenToWhitelist({
      jti,
      refreshToken: newRefreshToken,
      userId: user.id,
    });

    return c.json({ accessToken, refreshToken: newRefreshToken });
  },
);

const revokeRefreshTokenSchema = z.object({
  userId: z.string(),
});

auth.post(
  '/revoke-refresh-token',
  zValidator('json', revokeRefreshTokenSchema),
  async (c) => {
    const { userId } = c.req.valid('json');

    await revokeTokens(userId);
  },
);
