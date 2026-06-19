import type { ESLint, Linter, Rule } from 'eslint';

import pkg from '../package.json' with { type: 'json' };
import noHttpUrl from './rules/no-http-url.js';
import noSecretInfo from './rules/no-secret-info.js';

const PLUGIN_NAME = '@lintspec';

const rules: Record<string, Rule.RuleModule> = {
  'no-http-url': noHttpUrl,
  'no-secret-info': noSecretInfo,
};

const plugin: ESLint.Plugin = {
  meta: { name: pkg.name, version: pkg.version },
  rules,
};

const recommended: Linter.Config[] = [
  {
    name: `${PLUGIN_NAME}/recommended`,
    plugins: { [PLUGIN_NAME]: plugin },
    rules: {
      [`${PLUGIN_NAME}/no-http-url`]: 'warn',
      [`${PLUGIN_NAME}/no-secret-info`]: 'error',
    },
  },
];

plugin.configs = {
  recommended,
};

export default plugin;
export { rules };
