# @lintspec/eslint-plugin

Custom ESLint rules used by the `lintspec` toolchain. Targets **ESLint 9/10 flat config**.

## Install

```sh
pnpm add -D @lintspec/eslint-plugin eslint
```

## Use (flat config)

```js
// eslint.config.js
import linterSpec from '@lintspec/eslint-plugin';

export default [
  ...linterSpec.configs.recommended,
];
```

Or wire individual rules:

```js
import linterSpec from '@lintspec/eslint-plugin';

export default [
  {
    plugins: { '@lintspec': linterSpec },
    rules: {
      '@lintspec/no-http-url': 'warn',
      '@lintspec/no-secret-info': 'error',
      '@lintspec/no-broad-semantic-versioning': 'error',
      '@lintspec/no-js-in-ts-project': 'warn',
    },
  },
];
```

## Rules

| Rule | What it does |
| --- | --- |
| `no-http-url` | Warn on `http://` URLs in string literals; prefer `https://` |
| `no-secret-info` | Flag string literals assigned to identifiers matching `secret / token / password` (configurable via `dangerousKeys`) |
| `no-broad-semantic-versioning` | Forbid `*`, `x`, `>` ranges in `package.json` dependencies |
| `no-js-in-ts-project` | Discourage `.js`/`.jsx` source files in TS projects (config files are allowed) |

## License

MIT © SotherWind
