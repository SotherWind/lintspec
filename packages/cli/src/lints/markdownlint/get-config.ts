import path from 'node:path';

import markdownlintConfig from '@lintspec/markdownlint-config';
import fg from 'fast-glob';
import type { Options } from 'markdownlint';
import { readConfig } from 'markdownlint/sync';

import type { Config, PKG, ScanOptions } from '../../types.js';

export type MarkdownlintOptions = Options;

/**
 * Build the markdownlint options. Uses the shared config unless the project
 * provides its own `.markdownlint.*`.
 */
export function getMarkdownlintConfig(
  opts: ScanOptions,
  _pkg: PKG,
  config: Config,
): MarkdownlintOptions {
  const { cwd } = opts;

  const lintConfig: MarkdownlintOptions = {};

  if (config.markdownlintOptions) {
    Object.assign(lintConfig, config.markdownlintOptions);
    return lintConfig;
  }

  const userConfigFiles = fg.sync('.markdownlint?(-cli2).@(jsonc|json|yaml|yml)', {
    cwd,
    dot: true,
  });
  const [userConfigFile] = userConfigFiles;
  if (!userConfigFile) {
    lintConfig.config = markdownlintConfig;
  } else {
    lintConfig.config = readConfig(path.resolve(cwd, userConfigFile));
  }

  return lintConfig;
}
