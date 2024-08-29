import { ComponentProps } from 'react';
import { css } from 'styled-system/css';

type BaseButtonProps = ComponentProps<'button'>;

export function BaseButton({ children, className, ...props }: BaseButtonProps) {
  return <button {...props}>{children}</button>;
}

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};
