const countLetters = function(string) {

  const outputObj = {};
  for (let letter of string) {

    if (outputObj[letter]) {
      outputObj[letter]++;
    } else {
      outputObj[letter] = 1;
    }
  }

  return outputObj;
};

const assertEqual = function(actual, expected) {
  
  if (Object.is(actual) === Object.is(expected)) {
    console.log(`🍓🍓🍓 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(countLetters("lighthouse"), {L: 2, H: 1});