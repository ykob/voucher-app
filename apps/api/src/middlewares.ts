import { createMiddleware } from 'hono/factory';
import jwt from 'jsonwebtoken';
import { prisma } from '~/prisma.js';
import { env } from './env.js';

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
  const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);

  const currentUser = await prisma.user.findUnique({
    where: {
      id: typeof decoded === 'string' ? decoded : decoded.user,
    },
  });

  c.set('currentUser', currentUser);
  console.log(currentUser);

  await next();
});
