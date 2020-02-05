const middle = function(array) {
  let len = array.length;
  let midIndex = Math.floor(len / 2);
  let middleArrayNum = [];
  if (len <= 2){
      middleArrayNum;
  } else if (len % 2 === 0){
      for(let i = midIndex -1; i < midIndex + 1; i++){
          middleArrayNum.push(array[i]);
      }
    } else if (len % 2 !== 0) {
        middleArrayNum.push(array[midIndex]);
    }
  return middleArrayNum;
};

const eqArrays = function (arr1, arr2){
  console.log("arr2", arr2, "arr1", arr1)

  let isEquals = true;
  if(arr1.length === arr2.length){
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]){
        isEquals;
      }else {
        isEquals = false;
      }
    }
  }else{
    isEquals = false;
  }
  return isEquals;
};

const assertArraysEqual = function(array1, array2) {
    if(eqArrays(array1, array2) === true){
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${array1} === ${array2}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${array1} !== ${array2}\n`);
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
