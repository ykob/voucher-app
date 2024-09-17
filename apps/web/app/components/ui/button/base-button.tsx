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
      cursor: 'pointer',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      rounded: 'md',
      fontWeight: 'medium',
    },
    variants: {
      buttonSize: {
        sm: {
          h: 8,
          px: 3,
          fontSize: 'sm',
        },
        md: {
          h: 10,
          px: 4,
          fontSize: 'md',
        },
        lg: {
          h: 12,
          px: 5,
          fontSize: 'lg',
        },
      },
    },
  }),
};
