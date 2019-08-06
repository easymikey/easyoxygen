import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'Answer "yes" if number even therwise answer "no"';

const isEven = num => num % 2 === 0;
const generateQuestion = () => {
  const questionForUser = getRandom(0, 100);
  const correctAnswer = isEven(questionForUser) ? 'yes' : 'no';
  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateQuestion);
