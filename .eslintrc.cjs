module.exports = {
  'env': {
    'browser': true,
    'amd': true,
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'vue/multi-word-component-names': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/max-attributes-per-line': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'object-curly-spacing': ['error', 'always'],
    'tailwindcss/no-custom-classname': 0,
    'vue/html-closing-bracket-spacing': [
      'error', {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'never',
      }],
  },
  settings: {
    'import/resolver': 'vite',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
