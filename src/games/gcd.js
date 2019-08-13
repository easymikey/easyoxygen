import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'Find the greatest common divisor of given number.';

const findGcd = (a, b) => ((!b) ? a : findGcd(b, a % b));

const generateGameData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(2, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => runGame(ruleOfGame, generateGameData);
