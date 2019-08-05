import runGame from '..';

const ruleOfGame = 'Answer "yes" if number even therwise answer "no"';

const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const isEven = num => num % 2 === 0;
const generateQuestion = () => {
  const questionForUser = getRandom(100);
  const correctAnswer = isEven(questionForUser) ? 'yes' : 'no';
  return [questionForUser, correctAnswer];
};


export default () => runGame(ruleOfGame, generateQuestion);
