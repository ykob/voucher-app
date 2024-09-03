import { ComponentProps } from 'react';
import { cx } from 'styled-system/css';
import { cva } from 'styled-system/css/cva.mjs';
import { AsChildProps, Slot } from '~/components/utils/';

type BaseButtonProps = AsChildProps<ComponentProps<'button'>> & {
  buttonSize?: 'sm' | 'md' | 'lg';
  className?: string;
};

export function BaseButton({
  asChild,
  buttonSize = 'md',
  children,
  className,
  ...props
}: BaseButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={cx(styles.container({ buttonSize }), className)}
      type="button"
      {...props}
    >
      {children}
    </Component>
  );
}

const styles = {
  container: cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      buttonSize: {
        sm: {
          h: 8,
          px: 2,
          rounded: 'sm',
        },
        md: {
          h: 10,
          px: 4,
          rounded: 'md',
        },
        lg: {
          h: 12,
          px: 6,
          rounded: 'lg',
        },
      },
    },
  }),
};
