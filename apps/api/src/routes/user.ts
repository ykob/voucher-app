import { Hono } from 'hono';
import { prisma } from '~/prisma';

export const user = new Hono();

user.get('/', (c) => {
  return c.json(
    prisma.user.findUnique({
      where: {
        id: c.req.param('id'),
      },
    }),
  );
});
