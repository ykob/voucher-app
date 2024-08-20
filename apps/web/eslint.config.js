import customConfigs from 'eslint-config/web.js';

export default [
  ...customConfigs,
  {
    ignores: ['**/build**/', '**/styled-system/**'],
  },
];
