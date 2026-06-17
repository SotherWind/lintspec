# @lintspec/commitlint-config

Shareable [commitlint](https://commitlint.js.org/) configuration enforcing [Conventional Commits](https://www.conventionalcommits.org/) used by the `lintspec` toolchain.

## Install

```sh
pnpm add -D @lintspec/commitlint-config @commitlint/cli
```

## Use

Add a `commitlint.config.cjs` at your project root:

```js
module.exports = {
  extends: ['@lintspec/commitlint-config'],
};
```

Then wire it into a `commit-msg` git hook (husky v9):

```sh
pnpm exec husky init
echo 'pnpm exec commitlint --edit "$1"' > .husky/commit-msg
```

## What it enforces

| Rule | Setting |
| --- | --- |
| `type-enum` | `feat / fix / docs / style / refactor / perf / test / build / ci / chore / revert` |
| `header-max-length` | 100 |
| `body-max-line-length` | 100 |
| `subject-case` | not `sentence / start / pascal / upper` |
| `subject-empty` | required |
| `scope-case` | lower-case |
| `type-empty` | required |
| `body-leading-blank` / `footer-leading-blank` | warn |

## License

MIT © SotherWind
