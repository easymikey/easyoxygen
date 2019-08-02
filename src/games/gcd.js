import runGame from '..';

const ruleOfGame = {
  rule: 'Find the greatest common divisor of given number.',
  attempt: 3,
};
const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const commonDiv = (a, b) => {
  if (!b) {
    return a;
  }
  return commonDiv(b, a % b);
};
const generateRule = () => {
  const num1 = getRandom(100);
  const num2 = getRandom(100);
  const questionForUser = `${num1} ${num2}`;
  const correctAnswer = commonDiv(num1, num2).toString();
  return [questionForUser, correctAnswer];
};


export default () => runGame(ruleOfGame, generateRule);
