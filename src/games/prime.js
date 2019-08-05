import runGame from '..';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const isPrime = (num) => {
  if (num === 1 || num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generateQuestion = () => {
  const questionForUser = getRandom(100);
  const correctAnswer = isPrime(questionForUser) ? 'yes' : 'no';
  return [questionForUser, correctAnswer];
};


export default () => runGame(ruleOfGame, generateQuestion);
