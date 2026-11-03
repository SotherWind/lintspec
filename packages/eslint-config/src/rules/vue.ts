import type { Linter } from 'eslint';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

/**
 * Vue 3 rules via eslint-plugin-vue@10's flat-config preset.
 *
 * eslint-plugin-vue@10 no longer injects browser globals into its presets, so
 * `.vue` files need them explicitly — the base preset applies JS globals only
 * to JS-shaped files.
 */
const flatVue = (vue.configs?.['flat/recommended'] as Linter.Config[] | undefined) ?? [];

const vueConfig: Linter.Config[] = [
  ...flatVue,
  {
    name: '@lintspec/vue/globals',
    files: ['**/*.vue'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    name: '@lintspec/vue',
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
      'vue/no-unused-vars': 'warn',
      'vue/require-default-prop': 'off',
    },
  },
];

export default vueConfig;
