import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'What is the result of the expression?';

const generateQuestion = () => {
  const num1 = getRandom(2, 50);
  const num2 = getRandom(2, 50);
  const operationSing = {
    '*': 'multi',
    '+': 'add',
    '-': 'sub',
  };
  const calculateNumbers = (a, b) => (sing) => {
    switch (sing) {
      case '-':
        return a - b;
      case '+':
        return a + b;
      case '*':
        return a * b;
      default:
        return `Unknown token ${sing}`;
    }
  };
  const operation = Object.keys(operationSing);
  const generateOperation = operation[getRandom(0, operation.length - 1)];

  const questionForUser = `${num1} ${generateOperation} ${num2}`;
  const correctAnswer = calculateNumbers(num1, num2)(generateOperation).toString();

  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateQuestion);
