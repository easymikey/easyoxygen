import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'Find the greatest common divisor of given number.';

const commonDiv = (a, b) => {
  if (!b) {
    return a;
  }
  return commonDiv(b, a % b);
};
const generateGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(2, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = commonDiv(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => runGame(ruleOfGame, generateGameData);
