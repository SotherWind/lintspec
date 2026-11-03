---
'@lintspec/cli': major
'@lintspec/eslint-config': major
'@lintspec/eslint-plugin': minor
---

Replace eslint-plugin-react and eslint-plugin-jsx-a11y with @eslint-react/eslint-plugin and eslint-plugin-jsx-a11y-x, upgrade eslint-plugin-react-hooks to 7, and move to ESLint 10 with @eslint/js 10. React rule IDs change from `react/*` to `@eslint-react/*`; JSX a11y rule IDs change from `jsx-a11y/*` to `jsx-a11y-x/*`. TypeScript remains on 6.x until typescript-eslint supports 7.
