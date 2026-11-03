import eslintReact from '@eslint-react/eslint-plugin';
import type { ESLint, Linter } from 'eslint';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * React rules via @eslint-react/eslint-plugin's recommended flat config.
 *
 * @eslint-react is a rewrite of eslint-plugin-react and requires ESLint 10.
 * Its preset ships its own hooks rules; we disable those and keep the official
 * eslint-plugin-react-hooks rules to preserve the previous behaviour.
 */
const reactConfig: Linter.Config[] = [
  eslintReact.configs.recommended as unknown as Linter.Config,
  {
    name: '@lintspec/react',
    plugins: {
      'react-hooks': reactHooks as unknown as ESLint.Plugin,
    },
    rules: {
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];

export default reactConfig;
