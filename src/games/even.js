import runGame, { getSimpleGameData } from '..';
import getRandom from '../utils';

const ruleOfGame = 'Answer "yes" if number even therwise answer "no"';

export const isEven = num => num % 2 === 0;

const generateGameData = () => getSimpleGameData(isEven, getRandom(0, 50));

export default () => runGame(ruleOfGame, generateGameData);
