import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const greeting = (ruleOfGame) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  console.log('');
};
const numberOfRounds = 3;

const game = (round, generateGameData) => {
  let i = 0;
  while (i < round) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log('');
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
    console.log('');
    i += 1;
  }
  if (i === round) {
    return true;
  }

  return false;
};

const runGame = (ruleOfGame, generateGameData) => {
  greeting(ruleOfGame);

  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log('');
  const getResultOfGame = () => {
    const resultOfGame = game(numberOfRounds, generateGameData);
    if (resultOfGame === true) {
      console.log(`Congratulations, ${userName}!`);
    }
    if (resultOfGame === false) {
      console.log(`Let's try again, ${userName}...`);
    }
  };
  getResultOfGame();
};

export default runGame;
