import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const welcome = (str) => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  console.log(str);
  console.log('');
};

const getAnswer = (name, attempt, generateRule) => {
  const counter = (i) => {
    if (i === attempt) {
      console.log(`Congratulations,${name}!`);
      return;
    }

    const [questionForUser, correctAnswer] = generateRule();
    console.log(`Question: ${questionForUser}`);
    const answer = readlineSync.question('Your answer: ');


    if (correctAnswer === answer) {
      console.log('Correct!');
      console.log('');
      counter(i + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      console.log(`Let's try again, ${name}...`);
    }
  };

  counter(0);
};

const runGame = (ruleOfGame, generateRule) => {
  const { rule, attempt } = ruleOfGame;
  welcome(rule);
  const getName = userName();
  console.log(`Hello, ${getName}!`);
  console.log('');
  getAnswer(getName, attempt, generateRule);
};

export default runGame;
