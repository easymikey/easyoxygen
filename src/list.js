const colors = require('colors');
const { types } = require('./values');

module.exports = function bar() {
  console.log('');
  console.log('       CHOOSE A GAME        ');
  console.log('----------------------------');

  types.forEach((type) => {
    console.log('%s %s', colors.magenta.italic(`${type.name}`), colors.reset(`  ${type.number}`));
  });
  console.log('----------------------------');
};
