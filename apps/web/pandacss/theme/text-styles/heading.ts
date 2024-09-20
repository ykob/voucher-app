import { type TextStyles } from '@pandacss/types';

const textStyleBase = {
  lineHeight: 1.2,
  letterSpacing: 0,
};

export const heading: TextStyles = {
  md: {
    value: {
      ...textStyleBase,
      fontSize: 'md',
    },
  },
  sm: {
    value: {
      ...textStyleBase,
      fontSize: 'sm',
    },
  },
};
