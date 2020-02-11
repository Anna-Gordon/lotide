const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {

  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  } 
  
  let keysOfObj1 = Object.keys(obj1);
  let keysOfObj2 = Object.keys(obj2)
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  };
  
  for (let i = 0; i < keysOfObj1.length; i++){
    if(!keysOfObj2.includes(keysOfObj1[i])){
      return false;
    }
  }
  
  for(let key of keysOfObj1){
    // console.log(obj1[key],  obj2[key], Object.is(obj1[keysOfObj1]))
    if(obj1[key] !== obj2[key]){
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (obj1[key].length === obj2[key].length) {
          if (!eqArrays(obj1[key], obj2[key])) {
            return false;
          }
        }
      }
      if(Object.is(obj1[keysOfObj1]) !== Object.is(obj2[keysOfObj1]) || !eqObjects(obj1[key], obj2[key])){
        return false;
      }
    }
  }
        
  return true;
};
  
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

const printResult = (eqObjects, actual,expected) => {
  if (eqObjects) {
    console.log(`:white_check_mark:Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`:octagonal_sign:Assertion Failed: ${actual} !== ${expected}`);
  }
}
const assertEqObjects = (obj1, obj2) => {
  const isEqual = eqObjects(obj1, obj2)
  printResult(isEqual, JSON.stringify(obj1), JSON.stringify(obj2))
}

// // const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };
// // console.log(eqObjects(ab, ba)); // => true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc));

// // const abc = { a: "1", b: "2", c: "3" };
// // console.log(eqObjects(ab, abc));
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));

module.exports = eqObjects;
module.exports = printResult;

