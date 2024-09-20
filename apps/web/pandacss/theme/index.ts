import { ExtendableTheme } from '@pandacss/types';
import { semanticTokens } from './semantic-tokens';
import { textStyles } from './text-styles';

export const theme: ExtendableTheme = {
  extend: {
    semanticTokens,
    textStyles,
  },
};
