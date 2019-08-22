import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'What number is missing in the progression?';

export const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};
const length = 10;

const generateGameData = () => {
  const firstElement = getRandom(1, 10);
  const step = getRandom(0, 10);
  const progression = getProgression(firstElement, step, length);
  const hiddenElementPosition = getRandom(1, length - 1);

  const correctAnswer = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(ruleOfGame, generateGameData);
