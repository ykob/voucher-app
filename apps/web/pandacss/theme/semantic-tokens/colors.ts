const colors = {
  text: {
    value: {
      body: '{colors.neutral.800}',
      subtle: '{colors.neutral.600}',
      interactive: '{colors.neutral.100}',
    },
  },
  bg: {
    value: {
      neutral: '{colors.neutral.100}',
      primary: '{colors.blue.100}',
      success: '{colors.green.100}',
      warning: '{colors.yellow.100}',
      danger: '{colors.red.100}',
    },
    interactive: {
      value: {
        primary: '{colors.blue.600}',
        secondary: '{colors.neutral.600}',
        success: '{colors.green.600}',
        warning: '{colors.yellow.600}',
        danger: '{colors.red.600}',
      },
    },
  },
  border: {
    value: {
      neutral: '{colors.neutral.500}',
      primary: '{colors.blue.500}',
      success: '{colors.green.500}',
      warning: '{colors.yellow.500}',
      danger: '{colors.red.500}',
    },
  },
};

export { colors };
