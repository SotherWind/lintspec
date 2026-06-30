import { defineConfig } from 'vitest/config';

/**
 * Shared vitest defaults for every workspace package.
 *
 * The 30s timeout (vs vitest's 5s default) gives the linter-loading suites
 * — stylelint / eslint / markdownlint validating fixtures — headroom on cold
 * starts and slower CI runners (Windows/macOS). The 5s default flaked under
 * concurrent load. Packages can still raise it (the CLI does, since it spawns
 * its built binary).
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
    testTimeout: 30_000,
    hookTimeout: 30_000,
    // Mid-build state: a freshly-scaffolded package may not have any
    // test files yet (tests typically land a few commits later). Without
    // this, `pnpm -r test` exits 1 from the empty package and the
    // pre-push hook blocks the whole branch.
    passWithNoTests: true,
  },
});
