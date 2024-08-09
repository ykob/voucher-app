import { json, ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';

export const loader = () => {
  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
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
    const data = await response.json();
    console.log(`data`, data);

    return json({
      error: null,
      data,
    });
  } catch (error: any) {
    console.log(`error`, error);
    return json({ error: error.message, data: null });
  }
};

export default () => {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1>Index</h1>
      <Form method="post">
        <div>
          <label htmlFor="email">email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input id="password" type="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </Form>
      <div>
        {actionData && actionData.error && (
          <div>
            <div>{actionData.error}</div>
          </div>
        )}
      </div>
    </div>
  );
};
