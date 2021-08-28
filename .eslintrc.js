module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaVersion: 12,
  },
  env: {
    browser: true,
    jest: true,
    commonjs: true,
    es2021: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 2,
    'no-debugger': 'error',
    'no-alert': 'error',
    'default-case': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'prefer-promise-reject-errors': ['off'],
    'no-return-assign': ['off'],
  },
};
