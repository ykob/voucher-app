import { type TextStyles } from '@pandacss/types';

const textStyleBase = {
  lineHeight: 1.2,
  letterSpacing: 0,
};

export const heading: TextStyles = {
  lg: {
    value: {
      ...textStyleBase,
      fontSize: '3xl',
    },
  },
  md: {
    value: {
      ...textStyleBase,
      fontSize: 'xl',
    },
  },
  sm: {
    value: {
      ...textStyleBase,
      fontSize: 'lg',
    },
  },
};
