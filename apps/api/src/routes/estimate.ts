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
  const data = c.req.valid('json');

  return c.json(
    prisma.estimate.create({
      data: {
        userId: '',
        title: data.title,
        issueDate: data.issueDate,
        expires: data.expires,
        subtotal: data.subtotal,
        taxAmount: data.taxAmount,
        total: data.total,
        // lines: [],
        clientId: data.clientId,
        staffId: data.staffId,
      },
    }),
  );
});
