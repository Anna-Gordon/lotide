
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));


