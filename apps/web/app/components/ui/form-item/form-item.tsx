import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';
import { Slot } from '~/components/utils';

type FormItemProps = ComponentProps<'div'> & {
  error?: string;
  formId: string;
  label: string;
};

export function FormItem({
  children,
  className,
  error,
  formId,
  label,
  ...props
}: FormItemProps) {
  return (
    <div className={cx(styles.container, className)} {...props}>
      <label className={styles.label} htmlFor={formId}>
        {label}
      </label>
      <div className={styles.input}>
        <Slot id={formId}>{children}</Slot>
      </div>
      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1,
  }),
  label: css({
    display: 'block',
    textStyle: 'body.secondary',
  }),
  input: css({
    w: 'full',
  }),
  error: css({
    textStyle: 'body.secondary',
    color: 'text.danger',
  }),
};
