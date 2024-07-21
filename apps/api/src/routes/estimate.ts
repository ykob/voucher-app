import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { prisma } from '~/prisma';

export const estimate = new Hono();

estimate.get('/', async (c) => {
  const data = await prisma.estimate.findMany();

  return c.json(data);
});

estimate.get('/:id', async (c) => {
  const data = await prisma.estimate.findUnique({
    where: {
      id: c.req.param('id'),
    },
  });

  return c.json(data);
});

const estimateSchema = z.object({
  version: z.number(),
  title: z.string(),
  issueDate: z.coerce.date(),
  expires: z.coerce.date(),
  subtotal: z.number(),
  taxAmount: z.number(),
  total: z.number(),
  clientId: z.string(),
  staffId: z.string(),
});

estimate.post('/', zValidator('json', estimateSchema), async (c) => {
  const request = c.req.valid('json');
  const data = await prisma.estimate.create({
    data: {
      userId: '',
      title: request.title,
      issueDate: request.issueDate,
      expires: request.expires,
      subtotal: request.subtotal,
      taxAmount: request.taxAmount,
      total: request.total,
      // lines: [],
      clientId: request.clientId,
      staffId: request.staffId,
    },
  });

  c.header('Content-type', 'application/json');
  return c.json(data);
});

estimate.put('/:id', zValidator('json', estimateSchema), async (c) => {
  const request = c.req.valid('json');
  const data = await prisma.estimate.update({
    where: {
      id: c.req.param('id'),
      version: request.version,
    },
    data: {
      version: {
        increment: 1,
      },
      title: request.title,
      issueDate: request.issueDate,
      expires: request.expires,
      subtotal: request.subtotal,
      taxAmount: request.taxAmount,
      total: request.total,
      clientId: request.clientId,
      staffId: request.staffId,
    },
  });

  c.header('Content-type', 'application/json');
  return c.json(data);
});
