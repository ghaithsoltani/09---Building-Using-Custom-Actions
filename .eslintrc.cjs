module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true, 
    node: true,
    jest: true,          // ← Vitest uses Jest-compatible globals
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',  // ← disables the old "React must be in scope" rule
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {},
};