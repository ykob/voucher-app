import { Form, useActionData } from '@remix-run/react';

import { FilledButton, FormItem, InputField } from '~/components/ui/';
import { action } from './action';
import { loader } from './loader';

export { action, loader };

export default () => {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <Form method="post">
        <FormItem formId="email" label="メールアドレス">
          <InputField type="email" name="email" />
        </FormItem>
        <FormItem formId="password" label="パスワード">
          <InputField type="password" name="password" />
        </FormItem>
        <FilledButton>ログイン</FilledButton>
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
