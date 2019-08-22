import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'What is the result of the expression?';
export const mathOperations = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const generateGameData = () => {
  const num1 = getRandom(2, 50);
  const num2 = getRandom(2, 50);

  const mathOperators = Object.keys(mathOperations);
  const operator = mathOperators[getRandom(0, mathOperators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = mathOperations[operator](num1, num2).toString();

  return [question, correctAnswer];
};

export default () => runGame(ruleOfGame, generateGameData);
