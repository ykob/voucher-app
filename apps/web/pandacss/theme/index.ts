import { ExtendableTheme } from '@pandacss/types';
import { semanticTokens } from './semantic-tokens';

export const theme: ExtendableTheme = {
  extend: {
    semanticTokens,
  },
};
