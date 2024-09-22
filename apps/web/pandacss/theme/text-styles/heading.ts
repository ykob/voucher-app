import { type TextStyles } from '@pandacss/types';

const textStyleBase = {
  lineHeight: 1.2,
  fontWeight: 'bold',
  letterSpacing: 0,
};

export const heading: TextStyles = {
  primary: {
    value: {
      ...textStyleBase,
      fontSize: '3xl',
    },
  },
  secondary: {
    value: {
      ...textStyleBase,
      fontSize: '2xl',
    },
  },
  tertiary: {
    value: {
      ...textStyleBase,
      fontSize: 'xl',
    },
  },
};
