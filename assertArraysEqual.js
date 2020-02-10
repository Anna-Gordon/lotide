function eqArrays(arr1, arr2){

  let isEquals = true;

    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]){
        isEquals;
      }else{
        isEquals = false;
      }
    }

  return isEquals;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${array1} === ${array2}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${array1} !== ${array2}\n`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

