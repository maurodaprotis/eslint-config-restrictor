/* eslint-disable no-magic-numbers */
module.exports = {
  extends: [ 'plugin:@typescript-eslint/recommended' ],
  overrides: [
    {
      files: [ '*.styles.ts' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: [ '*.spec.{ts,tsx}' ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  plugins: [ '@typescript-eslint' ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': [ 'error' ],
    '@typescript-eslint/array-type': ['error', 'array'],
    '@typescript-eslint/camelcase': [ 'error' ],
    '@typescript-eslint/class-name-casing': [ 'error' ],
    '@typescript-eslint/explicit-function-return-type': [ 'error' ],
    '@typescript-eslint/explicit-member-accessibility': [ 'error' ],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/interface-name-prefix': [ 'error' ],
    '@typescript-eslint/member-delimiter-style': [ 'error' ],
    '@typescript-eslint/member-ordering': [ 'error' ],
    '@typescript-eslint/no-angle-bracket-type-assertion': [ 'error' ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-misused-new': [ 'error' ],
    '@typescript-eslint/no-require-imports': [ 'error' ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [ 'error' ],
    '@typescript-eslint/no-use-before-define': [ 'error' ],
    '@typescript-eslint/no-useless-constructor': [ 'error' ],
    '@typescript-eslint/prefer-function-type': [ 'error' ],
    '@typescript-eslint/prefer-interface': [ 'error' ],
    '@typescript-eslint/type-annotation-spacing': [ 'error' ],
    '@typescript-eslint/unified-signatures': [ 'error' ],
  },
};
