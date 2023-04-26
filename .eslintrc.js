module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:jsdoc/recommended'],
  plugins: ['prettier', 'jsdoc', 'html'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: [DEBUG],
  overrides: [{ files: ['*.html'], rules: { 'prettier/prettier': ['off'] } }],
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-unused-vars': ['error'],
    'no-var': ['error'],
    'no-constructor-return': ['error'],
    'no-promise-executor-return': ['error'],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unreachable-loop': ['error'],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    'func-name-matching': ['error'],
    'no-else-return': ['error'],
    'no-multi-assign': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-global-assign': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-return': ['error'],
    'object-shorthand': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    radix: ['error', 'as-needed'],
    yoda: ['error'],
    camelcase: 'off',
    'prefer-const': [2, { destructuring: 'any' }],
    'no-duplicate-imports': ['error', { includeExports: true }],
  },
};
