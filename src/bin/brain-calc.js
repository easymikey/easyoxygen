#!/usr/bin/env node
import runGame from '..';

const ruleOfGame = {
  rule: 'What is the result of the expression?',
  attempt: 3,
};
const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const calculateNuber = (a, b) => (message) => {
  switch (message) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
const makePair = (a, b) => calculateNuber(a, b);
const sub = operands => operands('-');
const add = operands => operands('+');
const multi = operands => operands('*');
const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];

const generateRule = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);
  const calc = randomChoice([sub, add, multi]);
  const showSing = (sing) => {
    if (sing === multi) {
      return '*';
    }
    if (sing === sub) {
      return '-';
    }
    if (sing === add) {
      return '+';
    }
    return 'operator is not defined';
  };

  const questionForUser = `${num1} ${showSing(calc)} ${num2}`;

  const correctAnswer = calc(makePair(num1, num2)).toString();
  return [questionForUser, correctAnswer];
};

runGame(ruleOfGame, generateRule);
