import runGame from '..';
import getRandom from '../utils';

const ruleOfGame = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateQuestion = () => {
  const firstNum = getRandom(1, 10);
  const step = getRandom(0, 10);
  const length = 10;
  const progression = getProgression(firstNum, step, length);
  const hideElementPossition = getRandom(1, length - 1);

  const correctAnswer = progression[hideElementPossition].toString();
  progression[hideElementPossition] = '..';
  const questionForUser = progression.join(' ');

  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateQuestion);
