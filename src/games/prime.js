import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
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
const generateQuestion = () => {
  const questionForUser = getRandom(1, 50);
  const correctAnswer = isPrime(questionForUser) ? 'yes' : 'no';
  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateQuestion);
