import customConfigs from 'eslint-config-custom/web.js';

export default [
  {
    ignores: ['**/build**/', '**/styled-system/**'],
  },
  ...customConfigs,
];
