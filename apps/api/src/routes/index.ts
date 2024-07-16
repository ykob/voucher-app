import { Hono } from 'hono';

export const subApp = new Hono();

subApp.get('/', (c) => {
  return c.text('Hello Hono! Sub');
});
