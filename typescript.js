/* eslint-disable no-magic-numbers */
module.exports = {
  extends: [
'plugin:import/typescript',
'plugin:@typescript-eslint/recommended',
'plugin:@typescript-eslint/recommended',
],
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
  plugins: ['import', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': [ 'error' ],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/camelcase': [ 'error' ],
    '@typescript-eslint/class-name-casing': [ 'error' ],
    '@typescript-eslint/explicit-function-return-type': [ 'warn' ],
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
    '@typescript-eslint/type-annotation-spacing': [ 'error' ],
    '@typescript-eslint/unified-signatures': [ 'error' ],
    'import/no-unresolved': 'error',
    'node/no-missing-import': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
