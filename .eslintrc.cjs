module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.eslint.json'],
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  rules: { 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }] },
};
