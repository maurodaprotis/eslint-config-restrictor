module.exports = {
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: [ 'prettier' ],
  rules: {
    'prettier/prettier': [ 'error' ],
  },
};
