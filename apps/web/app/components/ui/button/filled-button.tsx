import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';
import { BaseButton } from './base-button';

type FilledButtonProps = ComponentProps<typeof BaseButton> & {
  className?: string;
};

export function FilledButton({
  asChild,
  children,
  className,
  ...props
}: FilledButtonProps) {
  return (
    <BaseButton className={cx(styles.container, className)} {...props}>
      {children}
    </BaseButton>
  );
}

const styles = {
  container: css({}),
};
