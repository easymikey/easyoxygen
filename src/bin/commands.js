#!/usr/bin/env node

import program from 'commander';
import list from '../list';

program
  .command('list')
  .alias('ls')
  .description('Game menu list')
  .action(() => {
    list();
  });

program.parse(process.argv);
