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

const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const isEven = num => num % 2 === 0;

const getAnswer = (name, attempt) => {
  const counter = (i) => {
    if (i === attempt) {
      console.log(`Congratulations,${name}!`);
      return;
    }
    const number = getRandom(100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    console.log('');

    if (correctAnswer === answer) {
      counter(i + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      console.log(`Let's try again, ${name}...`);
    }
  };

  counter(0);
};
const ruleOfGame = {
  rule: 'Answer "yes" if number even therwise answer "no"',
  attempt: 3,
};

const runGame = () => {
  const { rule, attempt } = ruleOfGame;
  welcome(rule);
  const getName = userName();
  console.log(`Hello, ${getName}!`);
  console.log('');
  getAnswer(getName, attempt);
};

export default runGame;
