import type { Linter } from 'eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';

/**
 * JSX a11y rules via eslint-plugin-jsx-a11y-x, the ESLint 10-compatible fork
 * of eslint-plugin-jsx-a11y.
 */
const jsxA11yConfig: Linter.Config[] = [jsxA11y.configs.recommended as unknown as Linter.Config];

export default jsxA11yConfig;
