#!/usr/bin/env node
import { program } from 'commander';

import { CLI_NAME, PKG_VERSION } from './utils/constants.js';
import { messages } from './utils/messages.js';

program.name(CLI_NAME).version(PKG_VERSION).description(messages.description);

program.parse(process.argv);
