import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';

type InputFieldProps = ComponentProps<'input'>;

export function InputField({ className, ...props }: InputFieldProps) {
  return <input className={cx(styles.container, className)} {...props} />;
}

const styles = {
  container: css({
    px: 4,
    py: 2,
    border: '1px solid #ccc',
    borderRadius: 4,
  }),
};
