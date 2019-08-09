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
  for (let i = 0; i < round; i += 1) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      console.log('');
      return false;
    }
    console.log('Correct!');
    console.log('');
  }

  return true;
};

const runGame = (ruleOfGame, generateGameData) => {
  greeting(ruleOfGame);

  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log('');
  const resultOfGame = game(numberOfRounds, generateGameData);
  const showGameResult = resultOfGame ? `Congratulations, ${userName}!` : `Let's try again, ${userName}...`;

  console.log(`${showGameResult}`);
};

export default runGame;
