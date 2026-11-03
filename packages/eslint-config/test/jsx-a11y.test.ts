import { describe, it, expect } from 'vitest';

import { runLint } from './helpers/run-lint.js';
import jsxA11yConfig from '../src/configs/jsx-a11y.js';

describe('@lintspec/eslint-config/jsx-a11y', () => {
  it('exports a non-empty flat-config array', () => {
    expect(jsxA11yConfig.length).toBeGreaterThan(0);
  });

  it('flags images without alt text', async () => {
    const result = await runLint(
      jsxA11yConfig,
      'const App = () => <img src="photo.png" />;\nexport default App;\n',
      'demo.jsx',
    );
    expect(result.ruleIds).toContain('jsx-a11y-x/alt-text');
  });
});
