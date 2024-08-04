import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { authenticate } from '~/middlewares';
import { prisma } from '~/prisma';
import { deleteUser } from './services';

export const users = new Hono();

users.use(authenticate);

users.get('/:id', (c) => {
  return c.json(
    prisma.user.findUnique({
      where: {
        id: c.req.param('id'),
      },
    }),
  );
});

const registerSchema = z.object({
  id: z.string(),
});

users.delete('/:id', zValidator('json', registerSchema), async (c) => {
  const { id } = c.req.valid('json');
  const user = await deleteUser(id);

  return c.json(user);
});
