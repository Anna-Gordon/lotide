const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqArrays_recursion = require('./eqArrays_recursion');
const eqObjects_recursion = require('./eqObjects_recursion');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle, 
  assertArraysEqual,
  assertEqual,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  eqArrays,
  eqArrays_recursion,
  eqObjects_recursion,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without

};
