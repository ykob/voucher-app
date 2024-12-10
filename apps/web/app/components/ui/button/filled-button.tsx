import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';
import { BaseButton } from './base-button';

type FilledButtonProps = ComponentProps<typeof BaseButton> & {
  buttonColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
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
      color: 'text.interactive',
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
    },
    variants: {
      buttonColor: {
        primary: {
          bgColor: 'bg.interactive.primary',
          _hover: {
            bgColor: 'bg.interactive.primary.hover',
          },
          _active: {
            bgColor: 'bg.interactive.primary.active',
          },
        },
        secondary: {
          bgColor: 'bg.interactive.secondary',
          _hover: {
            bgColor: 'bg.interactive.secondary.hover',
          },
          _active: {
            bgColor: 'bg.interactive.secondary.active',
          },
        },
        success: {
          bgColor: 'bg.interactive.success',
          _hover: {
            bgColor: 'bg.interactive.success.hover',
          },
          _active: {
            bgColor: 'bg.interactive.success.active',
          },
        },
        warning: {
          bgColor: 'bg.interactive.warning',
          _hover: {
            bgColor: 'bg.interactive.warning.hover',
          },
          _active: {
            bgColor: 'bg.interactive.warning.active',
          },
        },
        danger: {
          bgColor: 'bg.interactive.danger',
          _hover: {
            bgColor: 'bg.interactive.danger.hover',
          },
          _active: {
            bgColor: 'bg.interactive.danger.active',
          },
        },
      },
    },
  }),
};
