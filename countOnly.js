const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  
  const output = {};

    for (let item of allItems){
      if(itemsToCount[item]){
        if(!output[item]){
          output[item] = 1;
        }else{
          output[item]++;
        }
      }           
    }

  return output;
}

// const eqArrays = function(arr1, arr2) {

//   let isEquals = true;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         isEquals;
//       } else {
//         isEquals = false;
//       }
//     }
//   } else {
//     isEquals = false;
//   }
//   return isEquals;
// };

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🍓🍓🍓 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;