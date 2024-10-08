import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { authenticate, logger } from '~/middlewares';
import { prisma } from '~/prisma';

export const estimates = new Hono();

estimates.use(logger);
estimates.use(authenticate);

estimates.get('/', async (c) => {
  const data = await prisma.estimate.findMany();

  return c.json(data);
});

estimates.get('/:id', async (c) => {
  try {
    const estimate = await prisma.estimate.findUnique({
      where: {
        id: c.req.param('id'),
      },
    });

    return c.json({
      success: true,
      data: estimate,
    });
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message,
    });
  }
});

const estimatesSchema = z.object({
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

estimates.post('/', zValidator('json', estimatesSchema), async (c) => {
  try {
    const request = c.req.valid('json');
    const estimate = await prisma.estimate.create({
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
    return c.json({
      success: true,
      data: estimate,
    });
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message,
    });
  }
});

estimates.put('/:id', zValidator('json', estimatesSchema), async (c) => {
  try {
    const request = c.req.valid('json');
    const estimate = await prisma.estimate.update({
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
    return c.json({
      success: true,
      data: estimate,
    });
  } catch (error: any) {
    return c.json({
      success: false,
      error: error.message,
    });
  }
});
