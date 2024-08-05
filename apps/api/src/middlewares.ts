import { createMiddleware } from 'hono/factory';
import jwt from 'jsonwebtoken';
import { env } from './env.js';
import { findUserById } from './users/services.js';

export const logger = createMiddleware(async (c, next) => {
  console.log(`[${c.req.method}] ${c.req.url}`);
  await next();
});

export const authenticate = createMiddleware(async (c, next) => {
  const { authorization } = c.req.header();

  if (!authorization) {
    throw new Error('🚫 Un-Authorized 🚫');
  }

  const token = authorization.split(' ')[1];
  const payload = jwt.verify(token, env.JWT_ACCESS_SECRET);

  if (typeof payload === 'string') {
    throw new Error('Invalid access token.');
  }

  const user = await findUserById(payload.user);

  if (!user) {
    throw new Error('Unauthorized.');
  }

  c.set('currentUser', user);
  console.log(user);

  await next();
});
