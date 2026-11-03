import { describe, it, expect } from 'vitest';

import { runLint } from './helpers/run-lint.js';
import tsNode from '../src/configs/typescript/node.js';
import tsReact from '../src/configs/typescript/react.js';
import tsVue from '../src/configs/typescript/vue.js';

describe('@lintspec/eslint-config/typescript/* combo configs', () => {
  it('typescript/react exports a flat-config array', () => {
    expect(Array.isArray(tsReact)).toBe(true);
    expect(tsReact.length).toBeGreaterThan(0);
  });

  it('typescript/react lints TSX without fatal errors', async () => {
    const code = `type Props = { name: string };

export function Demo({ name }: Props) {
  return <div>{name}</div>;
}
`;
    const result = await runLint(tsReact, code, 'demo.tsx');
    expect(result.fatalCount).toBe(0);
  });

  it('typescript/vue exports a flat-config array', () => {
    expect(Array.isArray(tsVue)).toBe(true);
    expect(tsVue.length).toBeGreaterThan(0);
  });

  it('typescript/node exports a flat-config array', () => {
    expect(Array.isArray(tsNode)).toBe(true);
    expect(tsNode.length).toBeGreaterThan(0);
  });
});
