import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'Find the greatest common divisor of given number.';

const commonDiv = (a, b) => {
  if (!b) {
    return a;
  }
  return commonDiv(b, a % b);
};
const generateQuestion = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(2, 100);
  const questionForUser = `${num1} ${num2}`;
  const correctAnswer = commonDiv(num1, num2).toString();
  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateQuestion);
