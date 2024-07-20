import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { prisma } from '~/prisma';

export const estimate = new Hono();

estimate.get('/', (c) => {
  return c.json(prisma.estimate.findMany());
});

estimate.get('/:id', (c) => {
  return c.json(
    prisma.estimate.findUnique({
      where: {
        id: c.req.param('id'),
      },
    }),
  );
});

const estimateSchema = z.object({
  version: z.number(),
  title: z.string(),
  issueDate: z.date(),
  expires: z.date(),
  subtotal: z.number(),
  taxAmount: z.number(),
  total: z.number(),
  clientId: z.string(),
  staffId: z.string(),
});

estimate.post('/', zValidator('json', estimateSchema), (c) => {
  const request = c.req.valid('json');
  const data = prisma.estimate.create({
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

  return c.json(data);
});

estimate.put('/:id', zValidator('json', estimateSchema), (c) => {
  const request = c.req.valid('json');
  const data = prisma.estimate.update({
    where: {
      id: c.req.param('id'),
      version: request.version,
    },
    data: {
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

  return c.json(data);
});
