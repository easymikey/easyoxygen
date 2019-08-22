import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'Answer "yes" if number even therwise answer "no"';

export const isEven = num => num % 2 === 0;
const generateGameData = () => {
  const question = getRandom(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(ruleOfGame, generateGameData);
