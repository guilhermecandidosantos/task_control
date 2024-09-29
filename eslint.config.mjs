import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {},
    rules: {
      // 'no-empty-function': 'error',
      'no-async-promise-executor': 'error',
      'arrow-body-style': ['error', 'always'],
      'no-loop-func': 'error',
      // 'require-await': 'error',
      'no-duplicate-imports': 'error',
      'no-restricted-imports': 'error',
      'no-regex-spaces': 'error',
      'no-irregular-whitespace': 'error',
      'max-len': ['error', { 'code': 100, 'tabWidth': 4, 'ignoreComments': true }],
      'array-bracket-spacing': ['error', 'always', { 'singleValue': false }],
      'object-curly-spacing': ['error', 'always'] ,
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { 'max': 1,'maxBOF': 0 }],
      '@typescript-eslint/no-empty-object-type': ["warn", { "allowInterfaces": 'always' }],
      '@typescript-eslint/no-unused-vars': ['warn']
    },
  },
)