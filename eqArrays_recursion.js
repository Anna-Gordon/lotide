

function eqArrays_recursion(arr1, arr2) {

  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays_recursion(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays_recursion(array1, array2)) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${array1} === ${array2}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${array1} !== ${array2}\n`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true

assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]);

module.exports = eqArrays_recursion;