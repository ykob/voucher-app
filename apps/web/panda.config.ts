import { defineConfig } from '@pandacss/dev';
import { theme } from './pandacss/theme';

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
  theme,

  // The output directory for your css system
  outdir: 'styled-system',
});
