import type { ESLint, Linter, Rule } from 'eslint';

import pkg from '../package.json' with { type: 'json' };
import noHttpUrl from './rules/no-http-url.js';

const PLUGIN_NAME = '@lintspec';

const rules: Record<string, Rule.RuleModule> = {
  'no-http-url': noHttpUrl,
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
    },
  },
];

plugin.configs = {
  recommended,
};

export default plugin;
export { rules };
