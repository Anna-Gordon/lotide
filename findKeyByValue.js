const assertEqual = require('./assertEqual');

const findKeyByValue = function(shows, name) {

  for (let show in shows) {
    if (shows[show] === name) {
      return show;
    }
  }
 
};


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🍓🍓🍓 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
