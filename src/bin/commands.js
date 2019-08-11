#!/usr/bin/env node

const program = require('commander');
const list = require('../list');

program
  .command('lis')
  .alias('ls')
  .description('Game menu list')
  .action(() => {
    list();
  });

program.parse(process.argv);
