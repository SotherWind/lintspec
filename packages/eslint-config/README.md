# @lintspec/eslint-config

Shareable [ESLint 9 flat-config](https://eslint.org/docs/latest/use/configure/configuration-files) presets used by the `lintspec` toolchain. 17 entry points covering JS / TS × React / Vue / Node, plus softened `essential/*` variants for legacy codebases.

## Install

```sh
pnpm add -D @lintspec/eslint-config eslint
```

## Use (flat config)

```js
// eslint.config.js
import base from '@lintspec/eslint-config';
import tsReact from '@lintspec/eslint-config/typescript/react';

export default [
  ...base,
  // override anything you like:
  { rules: { 'no-console': 'off' } },
];
```

## Entry points

| Entry | Use when |
| --- | --- |
| `@lintspec/eslint-config` | Plain ES2022 JavaScript (browser + Node globals) |
| `@lintspec/eslint-config/es5` | Legacy ES5 codebases |
| `@lintspec/eslint-config/react` | React (incl. jsx-a11y) |
| `@lintspec/eslint-config/vue` | Vue 3 |
| `@lintspec/eslint-config/node` | Node.js (eslint-plugin-n) |
| `@lintspec/eslint-config/jsx-a11y` | JSX a11y only (standalone) |
| `@lintspec/eslint-config/typescript` | TypeScript |
| `@lintspec/eslint-config/typescript/react` | TypeScript + React |
| `@lintspec/eslint-config/typescript/vue` | TypeScript + Vue 3 |
| `@lintspec/eslint-config/typescript/node` | TypeScript + Node |
| `@lintspec/eslint-config/essential` | Base with stylistic rules softened to `warn` |
| `@lintspec/eslint-config/essential/es5` | ES5 softened |
| `@lintspec/eslint-config/essential/react` | React softened |
| `@lintspec/eslint-config/essential/vue` | Vue softened |
| `@lintspec/eslint-config/essential/typescript` | TS softened |
| `@lintspec/eslint-config/essential/typescript/react` | TS + React softened |
| `@lintspec/eslint-config/essential/typescript/vue` | TS + Vue softened |

## Plugin matrix

The base plugins ship as **dependencies** — installed automatically, used by every entry:

- `@stylistic/eslint-plugin` — formatting/stylistic rules (ESLint 9 moved them out of core)
- `eslint-plugin-import-x` — module/import rules (maintained fork of `eslint-plugin-import`)
- `@eslint/js` + `globals` — recommended JS rules and global definitions

The framework plugins are **optional `peerDependencies`** — install only the ones for the entries you use (your package manager warns, but does not error, about any you skip):

| If you use… | Also install |
| --- | --- |
| `react`, `typescript/react`, `essential/react`, `essential/typescript/react` | `eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y` |
| `jsx-a11y` | `eslint-plugin-jsx-a11y` |
| `vue`, `typescript/vue`, `essential/vue`, `essential/typescript/vue` | `eslint-plugin-vue vue-eslint-parser` |
| `node`, `typescript/node` | `eslint-plugin-n` |
| any `typescript/*` or `typescript` entry | `typescript typescript-eslint` |

For example, a TypeScript + React project:

```sh
pnpm add -D @lintspec/eslint-config eslint \
  typescript typescript-eslint \
  eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

If an entry is imported without its peer plugin installed, ESLint throws a clear `Cannot find module 'eslint-plugin-…'` naming exactly what is missing.

## License

MIT © SotherWind
