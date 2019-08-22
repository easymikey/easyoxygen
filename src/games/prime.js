import runGame from '..';
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
const generateGameData = () => {
  const question = getRandom(1, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(ruleOfGame, generateGameData);
