import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';
import { BaseButton } from './base-button';

type FilledButtonProps = ComponentProps<typeof BaseButton>;

export function FilledButton({
  asChild = false,
  children,
  className,
  ...props
}: FilledButtonProps) {
  return (
    <BaseButton
      asChild={asChild}
      className={cx(styles.container, className)}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

const styles = {
  container: css({}),
};
