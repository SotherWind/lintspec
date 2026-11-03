import { describe, it, expect } from 'vitest';

import { runLint } from './helpers/run-lint.js';
import vueConfig from '../src/configs/vue.js';

describe('@lintspec/eslint-config/vue', () => {
  it('exports a non-empty flat-config array', () => {
    expect(vueConfig.length).toBeGreaterThan(0);
  });

  it('lints a basic .vue file without fatal errors', async () => {
    const code = `<template>
  <div>hello {{ name }}</div>
</template>

<script setup>
const name = 'demo';
</script>
`;
    const result = await runLint(vueConfig, code, 'demo.vue');
    expect(result.fatalCount).toBe(0);
  });

  it('provides browser globals to .vue files', async () => {
    const code = `<template>
  <div>{{ title }}</div>
</template>

<script setup>
const title = window.document.title;
</script>
`;
    const result = await runLint(vueConfig, code, 'demo-globals.vue');
    expect(result.ruleIds).not.toContain('no-undef');
  });
});
