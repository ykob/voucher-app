import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';
import { BaseButton } from './base-button';

type FilledButtonProps = ComponentProps<typeof BaseButton> & {
  buttonColor?: 'primary' | 'secondary' | 'negative';
};

export function FilledButton({
  asChild = false,
  buttonColor = 'primary',
  buttonSize,
  children,
  className,
  ...props
}: FilledButtonProps) {
  return (
    <BaseButton
      asChild={asChild}
      buttonSize={buttonSize}
      className={cx(styles.container({ buttonColor }), className)}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

const styles = {
  container: cva({
    base: {
      color: 'white',
    },
    variants: {
      buttonColor: {
        primary: {
          bg: 'blue.800',
        },
        secondary: {
          bg: 'gray.800',
        },
        negative: {
          bg: 'negative',
        },
      },
    },
  }),
};
