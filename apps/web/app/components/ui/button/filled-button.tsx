import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';
import { BaseButton } from './base-button';

type FilledButtonProps = ComponentProps<typeof BaseButton> & {
  buttonColor?: 'primary' | 'secondary' | 'danger';
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
      cursor: 'pointer',
      color: 'text.interactive',
      transition: 'background-color 0.2s',
    },
    variants: {
      buttonColor: {
        primary: {
          bgColor: 'bg.interactive.primary',
          _hover: {
            bg: 'bg.interactive.primary.hover',
          },
          _active: {
            bg: 'bg.interactive.primary.active',
          },
        },
        secondary: {
          bg: 'bg.interactive.secondary',
        },
        danger: {
          bg: 'bg.interactive.danger',
        },
      },
    },
  }),
};
