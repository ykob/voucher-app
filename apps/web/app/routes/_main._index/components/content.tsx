import { SerializeFrom } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { FilledButton, FormItem, InputField } from '~/components/ui/';
import { action } from '../action';

type ContentProps = {
  actionData: SerializeFrom<typeof action>;
};

export function Content({ actionData }: ContentProps) {
  return (
    <div>
      <Form method="post" className="">
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
}
