const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

function eqArrays(arr1, arr2) {

  let isEquals = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      isEquals;
    } else {
      isEquals = false;
    }
  }

  return isEquals;
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${array1} === ${array2}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${array1} !== ${array2}\n`);
  }
};

assertArraysEqual(results1, ["d", "g", "t", "t"]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'd', 't' ]);
