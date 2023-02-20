module.exports = {
  end: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recomended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'always'],
    'no-empty-funtion': 'off',
    'react/display-name': 'off',
    'no-alert': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
  },
};
