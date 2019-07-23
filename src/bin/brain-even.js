#!/usr/bin/env node
import { welcome, hello } from '.brain-games';
import userName from '../index';
import readlineSync from 'readline-sync';

const getСondition = () => {
	console.log(`Answer "yes" if number even therwise answer "no"`);
};
const getRandomInt= (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const evenNumber = (num) => num % 2 === 0;

const getAnswer = () => {
	const number = getRandomInt(100);
  console.log(`Question: ${number}`);
	const answer = readlineSync.question(`Your answer: `);
	if (anwer === 'yes' && evenNumber(number) === 'true') {
		console.log(`Correct`);
	} else {
		console.log(`"no" is wrong answer ;(. Correct answer was "yes"`);
		console.log(`Let's try again, ${userName()}`);
	}
	if (answer === 'no' && evenNumber(number) === 'false') {
		console.log(`Correct`);
	} else {
		console.log(`"yes" is wrong answer ;(. Correct answer was "no"`);
		console.log(`Let's try again, ${userName()}`);
	}
};

welcome();
getСondition();
console.log(``);
hello();
const answer1 = () => {
	const actual1 = getAnswer();
	return actual1;
};
const answer2 = () => {
	const actual2 = getAnswer();
	return actual2;
};
const answer3 = () => {
	const actual3 = getAnswer();
	return actual3;
};
if (answer1() === 'Correct' && answer2() === 'Correct' && answer3() === 'Correct'){
	console.log(`Congratulations, ${userName}`);
};
