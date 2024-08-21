import { ActionFunctionArgs, json } from '@remix-run/node';
import { getSession } from '~/session';

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const body = await request.formData();

  try {
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: body.get('email'),
        password: body.get('password'),
      }),
    });
    const { success, data } = await response.json();

    if (!success) {
      session.flash('error', data.message);
      return json({
        error: data.message,
        data: null,
      });
    }

    session.set('accessToken', data.accessToken);
    session.set('refreshToken', data.refreshToken);

    return json({
      error: null,
      data,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
