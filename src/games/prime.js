import runGame, { getSimpleGameData } from '..';
import getRandom from '../utils';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) { // to cut caclucations up
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
/* isPrige functional programming
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (acc) => {
    if (acc > num / 2) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }

    return iter(acc + 1);
  };
  return iter(2);
};
*/
const generateGameData = () => getSimpleGameData(isPrime, getRandom(0, 100));

export default () => runGame(ruleOfGame, generateGameData);
