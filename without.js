const without = function(source, itemsToRemove) {
  let outputArr = source;
  for (let i = 0; i < outputArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (outputArr[i] === itemsToRemove[j]) {
        outputArr.splice(i, 1);
      }
    }
  }
  return outputArr;
};

const eqArrays = function(arr1, arr2) {

  let isEquals = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEquals;
      } else {
        isEquals = false;
      }
    }
  } else {
    isEquals = false;
  }
  return isEquals;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${array1} === ${array2}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${array1} !== ${array2}\n`);
  }
};


let words = without(["hello", "world", "lighthouse"], ["hello", "lighthouse"]);
let words1 = without(["1", "2", "3"], [1, 2, "3"]);

assertArraysEqual(words, ["world"]);
assertArraysEqual(words1, ["1", "2"]);

