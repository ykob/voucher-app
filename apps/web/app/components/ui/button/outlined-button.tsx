import { ComponentProps } from 'react';
import { cva, cx } from 'styled-system/css';
import { BaseButton } from './base-button';

type OutlinedButtonProps = ComponentProps<typeof BaseButton> & {
  buttonColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
};

export function OutlinedButton({
  asChild = false,
  buttonColor = 'primary',
  buttonSize,
  children,
  className,
  ...props
}: OutlinedButtonProps) {
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
      borderWidth: '2px',
      color: 'text.interactive',
      fontWeight: 'bold',
      bgColor: 'transparent',
      transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
      _hover: {
        color: 'text.interactive',
      },
    },
    variants: {
      buttonColor: {
        primary: {
          borderColor: 'bg.interactive.primary',
          color: 'bg.interactive.primary',
          _hover: {
            borderColor: 'bg.interactive.primary.hover',
            bgColor: 'bg.interactive.primary.hover',
          },
          _active: {
            borderColor: 'bg.interactive.primary.active',
            bgColor: 'bg.interactive.primary.active',
          },
        },
        secondary: {
          borderColor: 'bg.interactive.secondary',
          color: 'bg.interactive.secondary',
          _hover: {
            borderColor: 'bg.interactive.secondary.hover',
            bgColor: 'bg.interactive.secondary.hover',
          },
          _active: {
            borderColor: 'bg.interactive.secondary.active',
            bgColor: 'bg.interactive.secondary.active',
          },
        },
        success: {
          borderColor: 'bg.interactive.success',
          color: 'bg.interactive.success',
          _hover: {
            borderColor: 'bg.interactive.success.hover',
            bgColor: 'bg.interactive.success.hover',
          },
          _active: {
            borderColor: 'bg.interactive.success.active',
            bgColor: 'bg.interactive.success.active',
          },
        },
        warning: {
          borderColor: 'bg.interactive.warning',
          color: 'bg.interactive.warning',
          _hover: {
            borderColor: 'bg.interactive.warning.hover',
            bgColor: 'bg.interactive.warning.hover',
          },
          _active: {
            borderColor: 'bg.interactive.warning.active',
            bgColor: 'bg.interactive.warning.active',
          },
        },
        danger: {
          borderColor: 'bg.interactive.danger',
          color: 'bg.interactive.danger',
          _hover: {
            borderColor: 'bg.interactive.danger.hover',
            bgColor: 'bg.interactive.danger.hover',
          },
          _active: {
            borderColor: 'bg.interactive.danger.active',
            bgColor: 'bg.interactive.danger.active',
          },
        },
      },
    },
  }),
};
