import { SerializeFrom } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { css } from 'styled-system/css';
import { FilledButton, FormItem, InputField } from '~/components/ui/';
import { action } from '../action';

type ContentProps = {
  actionData: SerializeFrom<typeof action>;
};

export function Content({ actionData }: ContentProps) {
  return (
    <div>
      <Form method="post" className={styles.container}>
        <FormItem formId="email" label="メールアドレス">
          <InputField type="email" name="email" />
        </FormItem>
        <FormItem formId="password" label="パスワード">
          <InputField type="password" name="password" />
        </FormItem>
        <div className={styles.buttons}>
          <FilledButton buttonSize="lg">ログイン</FilledButton>
        </div>
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

const styles = {
  container: css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 4,
  }),
  buttons: css({
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
  }),
};
