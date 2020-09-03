#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { inquirerFile } from './inquirer';
import { puppet } from './tests';

clear();

const run = async () => {
  console.log(chalk.cyan(figlet.textSync('Equa11y', { horizontalLayout: 'full' })));
  const inputURL = await inquirerFile.askPreferences();
  puppet(inputURL.url);
};

run();

// module.exports = run;