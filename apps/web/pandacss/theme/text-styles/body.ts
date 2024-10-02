import { type TextStyles } from '@pandacss/types';

const textStyleBase = {
  lineHeight: 1.75,
  fontWeight: 'normal',
  letterSpacing: '0.08em',
};

export const body: TextStyles = {
  primary: {
    value: {
      ...textStyleBase,
      fontSize: 'md',
    },
  },
  secondary: {
    value: {
      ...textStyleBase,
      fontSize: 'sm',
    },
  },
  tertiary: {
    value: {
      ...textStyleBase,
      fontSize: 'xs',
    },
  },
};
