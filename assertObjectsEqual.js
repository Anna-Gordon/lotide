
const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key of Object.keys(obj1)) {
      if (obj1[key] === obj2[key])
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          if (obj1[key].length === obj2[key].length) {
            if (!eqArrays(obj1[key], obj2[key])) {
              return false;
            }
          }
        }
    }
  } else {
    return false;
  }
  return true;
};
  
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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(obj1)}`);
  if (eqObjects(obj1, obj2) === true) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}\n`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);


