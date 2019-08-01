#!/usr/bin/env node
import runGame from '..';

const ruleOfGame = {
  rule: 'Answer "yes" if number even therwise answer "no"',
  attempt: 3,
};
const getRandom = max => Math.floor(Math.random() * Math.floor(max));
const isEven = num => num % 2 === 0;
const generateRule = () => {
  const questionForUser = getRandom(100);
  const correctAnswer = isEven(questionForUser) ? 'yes' : 'no';
  return [questionForUser, correctAnswer];
};


runGame(ruleOfGame, generateRule);
