import { isEven } from '../src/games/even';
import { findGcd } from '../src/games/gcd';
import { isPrime } from '../src/games/prime';
import { getProgression } from '../src/games/progression';
import { mathOperations } from '../src/games/calc';

test('mathOperations', () => {
  const operator = Object.keys(mathOperations);
  const multi = operator[0];
  const add = operator[1];
  const sub = operator[2];
  expect((mathOperations)[multi](1, 2)).toBe(2);
  expect((mathOperations)[multi](0, 2)).toBe(0);
  expect((mathOperations)[multi](-17, 2)).toBe(-34);
  expect((mathOperations)[multi](-2, -1)).toBe(2);

  expect((mathOperations)[add](4, 2)).toBe(6);
  expect((mathOperations)[add](-15, 7)).toBe(-8);
  expect((mathOperations)[add](-1, 12)).toBe(11);

  expect((mathOperations)[sub](16, 9)).toBe(7);
  expect((mathOperations)[sub](-34, -75)).toBe(41);
  expect((mathOperations)[sub](-2, 54)).toBe(-56);
});

test('isEven', () => {
  expect(isEven(-3)).toBe(false);
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
  expect(isEven(4)).toBe(true);
  expect(isEven(15)).toBe(false);
  expect(isEven(24)).toBe(true);
  expect(isEven(97, 5)).toBe(false);
});

test('findGcd', () => {
  expect(findGcd(1, 2)).toBe(1);
  expect(findGcd(25, 15)).toBe(5);
  expect(findGcd(30, 57)).toBe(3);
  expect(findGcd(90, 48)).toBe(6);
  expect(findGcd(120, 124)).toBe(4);
  expect(findGcd(125, 95)).toBe(5);
  expect(Number.isNaN(findGcd(24, 15))).toBe(false);
});

test('isPrime', () => {
  expect(isPrime(0)).toBe(false);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(51)).toBe(false);
  expect(isPrime(71)).toBe(true);
  expect(isPrime(100)).toBe(false);
});

test('getProgression', () => {
  expect(getProgression(0, 2, 6)).toHaveLength(6);
  expect(getProgression(0, 0, 0)).toHaveLength(0);
  expect(getProgression(15, 25, 8)).toHaveLength(8);
  expect(getProgression(0, 0, 0)).toEqual(expect.arrayContaining([]));
  expect(getProgression(0, 2, 6)).toEqual(expect.arrayContaining([0, 2, 4, 6, 8, 10]));
  expect(getProgression(5, 2, 10)).toEqual(expect.arrayContaining([5, 7, 9, 11, 13, 15, 17, 19, 21]));
  expect(getProgression(11, 11, 8)).toEqual(expect.arrayContaining([11, 22, 33, 44, 55, 66, 77, 88]));
});
