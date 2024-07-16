import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { subApp } from './routes';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});
app.route('/sub', subApp);

const port = 4000;
console.log(`API Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
