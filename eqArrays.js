function eqArrays(arr1, arr2){

  let isEquals = true;
  if(arr1.length === arr2.length){
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]){
        isEquals;
      }else{
        isEquals = false;
      }
    }
  }else{
    isEquals = false;
  }
  return isEquals;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

