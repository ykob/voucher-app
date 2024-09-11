import { defineConfig } from '@pandacss/dev';
import { semanticTokens } from './pandacss/semantic-tokens';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './app/routes/**/*.{ts,tsx,js,jsx}',
    './app/components/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens,
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
