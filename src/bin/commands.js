#!/usr/bin/env node

import program from 'commander';
import list from '../list';
import menu from '../menu';

program
  .command('list')
  .alias('ls')
  .description('output the list of games')
  .action(() => {
    list();
  });

program
  .version('easyoxegen version 2.5.2')
  .description('minigames');

program
  .command('menu')
  .description('output the game menu')
  .action(() => {
    menu();
  });

program.parse(process.argv);
