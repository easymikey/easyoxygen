import runGame from '..';

const ruleOfGame = 'What number is missing in the progression?';

const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateQuestion = () => {
  const firstNum = getRandom(10);
  const step = getRandom(10);
  const length = 10;
  const progression = getProgression(firstNum, step, length);
  const hideElementPossition = getRandom(length);

  const correctAnswer = progression[hideElementPossition].toString();
  progression[hideElementPossition] = '..';
  const questionForUser = progression.join(' ');

  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateQuestion);
