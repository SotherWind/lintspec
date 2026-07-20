# lintspec v1.0.0 发布公告

我们很高兴地宣布 **lintspec** v1.0.0 正式发布！

## 什么是 lintspec？

lintspec 是一套面向前端团队的统一 Linting 与代码风格规范工具链，将 ESLint / Stylelint / commitlint / markdownlint / Prettier 的最佳实践打包成开箱即用的共享配置，并提供一个 CLI 入口 `lintspec` 统一管理。

## 发布的包

| 包名 | 版本 | 说明 |
| --- | --- | --- |
| `@lintspec/commitlint-config` | 1.0.0 | commitlint 共享配置，基于 conventionalcommits |
| `@lintspec/markdownlint-config` | 1.0.0 | markdownlint 0.34 共享规则集 |
| `@lintspec/eslint-plugin` | 1.0.0 | 自定义 ESLint 规则（禁止明文请求地址 / 敏感信息等） |
| `@lintspec/eslint-config` | 1.0.0 | ESLint 9 flat-config 共享配置，17 个 entry + 13 个 rule fragment |
| `@lintspec/stylelint-config` | 1.0.0 | Stylelint 17 共享配置，支持 SCSS / Less / CSS Modules |
| `@lintspec/cli` | 1.0.0 | 统一 CLI 工具，提供 init / scan / fix / update 命令 |

## 快速开始

```bash
# 在项目中初始化
npx @lintspec/cli init

# 扫描代码
npx @lintspec/cli scan

# 自动修复
npx @lintspec/cli fix
```

## 环境要求

- Node.js `^20.19.0 || >=22.12.0`
- pnpm（推荐）/ npm / Yarn

## 致谢

感谢所有为 lintspec 贡献代码和反馈的开发者。

---

*Released under the MIT License.*
