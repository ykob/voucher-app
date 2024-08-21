import { Form, useActionData } from '@remix-run/react';

import { action } from './action';
import { loader } from './loader';

export { action, loader };

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
