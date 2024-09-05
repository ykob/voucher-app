import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': `../web/app/`,
      'styled-system': `../web/styled-system/`,
    },
  },
});
