module.exports = {
  env: {
    browser: false,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:node/recommended',
  ],
  plugins: [],
  rules: {
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
