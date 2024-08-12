// This file is used to create a session storage for the app.
// https://remix.run/docs/en/main/utils/sessions

import { createCookieSessionStorage } from '@remix-run/node'; // or cloudflare/deno

type SessionData = {
  accessToken: string;
  refreshToken: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: '__session',
      domain: 'remix.run',
      httpOnly: true,
      maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: true,
    },
  });

export { commitSession, destroySession, getSession };
