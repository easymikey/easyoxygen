
import inquirer from 'inquirer';
import games from './values';
import brainCalc from './games/calc';
import brainEven from './games/even';
import brainGcd from './games/gcd';
import brainPrime from './games/prime';
import brainProgression from './games/progression';


const questions = {
  type: 'list', name: 'gameType', message: 'CHOOSE THE GAME'.magenta, choices: games.getGame,
};

export default () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log('='.repeat(38));
      console.log('              starting...             '.toUpperCase().bgMagenta);
      console.log('='.repeat(38));
      switch (answers.gameType) {
        case '#1 brain-calc':
          return brainCalc();
        case '#2 brain-even':
          return brainEven();
        case '#3 brain-gcd':
          return brainGcd();
        case '#4 brain-prime':
          return brainPrime();
        case '#5 brain-progression':
          return brainProgression();
        default:
          return 'Error: game do not chosen';
      }
    });
};
