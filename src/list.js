import colors from 'colors';
import { games } from './values';

module.exports = function showListOFGames() {
  console.log('');
  console.log(' === CHOOSE THE GAME ==='.magenta.bold);

  games.forEach((game) => {
    console.log('%s %s', colors.reset(`${game.number}`), colors.reset(`  ${game.name}`));
  });
  console.log('='.repeat(25).magenta.bold);
};
