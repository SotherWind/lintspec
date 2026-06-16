# lintspec

> Frontend linting & coding-style specification (ESLint / Stylelint / commitlint / markdownlint / Prettier) as a unified toolchain.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A monorepo of shareable linter configurations and a single CLI (`lintspec`) that initializes and runs them in a project. Built on top of the latest versions of each linter (ESLint 9 flat config, Stylelint 17, Prettier 3, commitlint 19, markdownlint 0.34).

## Packages

| Package | Purpose |
| --- | --- |
| [`@lintspec/cli`](packages/cli) | The `lintspec` CLI: init / scan / fix / commit-msg-scan / commit-file-scan / update |
| [`@lintspec/eslint-config`](packages/eslint-config) | Flat-config ESLint preset with 17 entry points (JS / TS × React / Vue / Node, plus `essential` softened variants) |
| [`@lintspec/eslint-plugin`](packages/eslint-plugin) | Custom ESLint rules: `no-http-url`, `no-secret-info`, `no-broad-semantic-versioning`, `no-js-in-ts-project` |
| [`@lintspec/stylelint-config`](packages/stylelint-config) | Stylelint 17 preset with `@stylistic/stylelint-plugin` for the rules removed from core in v15 |
| [`@lintspec/commitlint-config`](packages/commitlint-config) | commitlint 19 preset on conventional-commits |
| [`@lintspec/markdownlint-config`](packages/markdownlint-config) | markdownlint 0.34 preset |

## Quick start

```sh
pnpm install
pnpm -r build
pnpm -r test
```

## Repo

- Source: <https://github.com/SotherWind/lintspec>
- License: MIT
- Author: SotherWind
