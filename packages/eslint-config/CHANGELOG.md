# @lintspec/eslint-config

## 2.0.0

### Major Changes

- 2621638: Raise the minimum Node.js version to 22.13 and upgrade the non-React toolchain: Stylelint 17.16, commitlint 21, markdownlint 0.42, Prettier 3.9, Vitest 5, and the latest Vue / @stylistic / eslint-plugin-n / typescript-eslint integrations.
- c6cc206: Replace eslint-plugin-react and eslint-plugin-jsx-a11y with @eslint-react/eslint-plugin and eslint-plugin-jsx-a11y-x, upgrade eslint-plugin-react-hooks to 7, and move to ESLint 10 with @eslint/js 10. React rule IDs change from `react/*` to `@eslint-react/*`; JSX a11y rule IDs change from `jsx-a11y/*` to `jsx-a11y-x/*`. TypeScript remains on 6.x until typescript-eslint supports 7.

## 1.0.0

### Major Changes

- Initial release with ESLint 9 flat-config presets for JavaScript, ES5, Node.js, React, Vue, JSX accessibility, TypeScript, and softened essential variants.
