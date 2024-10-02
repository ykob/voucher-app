import { type Recursive, type SemanticToken } from '@pandacss/types';

const colors: Recursive<SemanticToken<string, string>> = {
  text: {
    body: { value: '{colors.neutral.800}' },
    subtle: { value: '{colors.neutral.600}' },
    link: { value: '{colors.blue.600}' },
    interactive: { value: '{colors.neutral.100}' },
    disabled: { value: '{colors.neutral.400}' },
    success: { value: '{colors.green.600}' },
    warning: { value: '{colors.yellow.600}' },
    danger: { value: '{colors.red.600}' },
  },
  bg: {
    neutral: { value: '{colors.neutral.100}' },
    primary: { value: '{colors.blue.100}' },
    success: { value: '{colors.green.100}' },
    warning: { value: '{colors.yellow.100}' },
    danger: { value: '{colors.red.100}' },
    interactive: {
      primary: {
        DEFAULT: { value: '{colors.blue.600}' },
        hover: { value: '{colors.blue.700}' },
        active: { value: '{colors.blue.800}' },
      },
      secondary: {
        DEFAULT: { value: '{colors.neutral.700}' },
        hover: { value: '{colors.neutral.800}' },
        active: { value: '{colors.neutral.900}' },
      },
      success: {
        DEFAULT: { value: '{colors.green.600}' },
        hover: { value: '{colors.green.700}' },
        active: { value: '{colors.green.800}' },
      },
      warning: {
        DEFAULT: { value: '{colors.yellow.600}' },
        hover: { value: '{colors.yellow.700}' },
        active: { value: '{colors.yellow.800}' },
      },
      danger: {
        DEFAULT: { value: '{colors.red.600}' },
        hover: { value: '{colors.red.700}' },
        active: { value: '{colors.red.800}' },
      },
    },
  },
  border: {
    neutral: { value: '{colors.neutral.500}' },
    primary: { value: '{colors.blue.500}' },
    success: { value: '{colors.green.500}' },
    warning: { value: '{colors.yellow.500}' },
    danger: { value: '{colors.red.500}' },
  },
  input: {
    text: { value: '{colors.neutral.800}' },
    bg: { value: '{colors.neutral.200}' },
    border: { value: '{colors.neutral.500}' },
    danger: {
      bg: { value: '{colors.red.100}' },
      border: { value: '{colors.red.500}' },
    },
  },
};

export { colors };
