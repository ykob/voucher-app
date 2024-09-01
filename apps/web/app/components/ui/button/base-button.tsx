import { ComponentProps } from 'react';
import { css, cx } from 'styled-system/css';
import { AsChildProps, Slot } from '~/components/utils/';

type BaseButtonProps = AsChildProps<ComponentProps<'button'>> & {
  className?: string;
};

export function BaseButton({
  asChild,
  children,
  className,
  ...props
}: BaseButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={cx(styles.container, className)}
      type="button"
      {...props}
    >
      {children}
    </Component>
  );
}

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'lg',
  }),
};
