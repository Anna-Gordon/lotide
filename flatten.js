const flatten = function(array) {
  let outputArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array[i].forEach(element => {
        outputArr.push(element);
      });
    } else {
      outputArr.push(array[i]);
    }
  }
  return outputArr;
};
// console.log(flatten([1, 2, [3, 4], 5, [6]]))

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 3, 4, 5, 6]);
