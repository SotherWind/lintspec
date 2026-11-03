import type { Linter } from 'eslint';

/**
 * Strict mode rule. ESLint retains the legacy `strict` rule for non-module code.
 */
const strictRules: Linter.Config = {
  name: '@lintspec/strict',
  rules: {
    strict: 'error',
  },
};

export default strictRules;
