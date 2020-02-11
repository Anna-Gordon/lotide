const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const outputArr = [];
  for (const index in array) {
    if (!callback(array[index])) {
      outputArr.push(array[index]);
    } else {
      return outputArr;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// function eqArrays(arr1, arr2) {

//   let isEquals = true;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       isEquals;
//     } else {
//       isEquals = false;
//     }
//   }

//   return isEquals;
// }


// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${array1} === ${array2}\n`);
//   } else {
//     console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${array1} !== ${array2}\n`);
//   }
// };

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results1, [ 1, 2, 5, 7]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results1, [ 'I\'ve', 'been', 'to']);


module.exports = takeUntil;