import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { authenticate } from '~/middlewares';
import { prisma } from '~/prisma';
import { deleteUser } from './services';

export const users = new Hono();

users.use(authenticate);

users.get('/:id', async (c) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: c.req.param('id'),
      },
    });

    return c.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message,
    });
  }
});

const registerSchema = z.object({
  id: z.string(),
});

users.delete('/:id', zValidator('json', registerSchema), async (c) => {
  try {
    const { id } = c.req.valid('json');
    const user = await deleteUser(id);

    return c.json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message,
    });
  }
});
