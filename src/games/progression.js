import runGame from '..';

const ruleOfGame = {
  rule: 'What number is missing in the progression?',
  attempt: 3,
};
const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const getProgression = (start, step, counter) => {
  const progression = [];

  for (let i = 0; i < counter; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRule = () => {
  const firstNum = getRandom(10);
  const step = getRandom(10);
  const counter = 10;
  const progression = getProgression(firstNum, step, counter);
  const hideNumber = getRandom(counter);

  const correctAnswer = progression[hideNumber].toString();
  progression[hideNumber] = '..';
  const questionForUser = progression.join(' ');


  return [questionForUser, correctAnswer];
};

export default () => runGame(ruleOfGame, generateRule);
