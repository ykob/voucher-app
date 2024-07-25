import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { auth, estimates } from './routes';

const app = new Hono();
const routes = app.route('/auth', auth).route('/estimates', estimates);
const port = 4000;

console.log(`API Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export type AppType = typeof routes;
