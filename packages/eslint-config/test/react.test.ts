import { describe, it, expect } from 'vitest';

import { runLint } from './helpers/run-lint.js';
import react from '../src/configs/react.js';

describe('@lintspec/eslint-config/react', () => {
  it('exports a non-empty flat-config array', () => {
    expect(react.length).toBeGreaterThan(0);
  });

  it('lints a basic JSX file without fatal errors', async () => {
    const code = `import React from 'react';

function Demo() {
  return <div>hello</div>;
}

export default Demo;
`;
    const result = await runLint(react, code, 'demo.jsx');
    expect(result.fatalCount).toBe(0);
  });

  it('flags missing keys in mapped JSX', async () => {
    const code = `import React from 'react';

const items = [1, 2, 3];

function Demo() {
  return <ul>{items.map((item) => <li>{item}</li>)}</ul>;
}

export default Demo;
`;
    const result = await runLint(react, code, 'demo.jsx');
    expect(result.ruleIds).toContain('@eslint-react/no-missing-key');
  });

  it('uses the official react-hooks rules', async () => {
    const code = `import React from 'react';

function Demo({ ok }) {
  if (ok) {
    const [value] = React.useState(0);
    return <div>{value}</div>;
  }
  return <div />;
}

export default Demo;
`;
    const result = await runLint(react, code, 'demo.jsx');
    expect(result.ruleIds).toContain('react-hooks/rules-of-hooks');
  });
});
