/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  ignorePatterns: ['src/auto-imports.d.ts', 'src/components.d.ts'],
  rules: {
    'no-console': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/prefer-import-from-vue': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        singleAttributePerLine: true,
      },
    ],
  },
}
