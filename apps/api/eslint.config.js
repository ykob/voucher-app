import customConfigs from 'eslint-config/api.js';

export default [
  ...customConfigs,
  {
    ignores: ['build'],
  },
];
