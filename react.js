module.exports = {
  extends: [ 'react-app' ],
  plugins: [ 'react-hooks' ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
};
