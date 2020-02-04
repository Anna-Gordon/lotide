const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍓🍓🍓 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


let words = ["Yo Yo", "Lighthouse", "Labs"];

function tail(array) {
  if (array.length > 1) {
    let newArr = array.slice(1);
    return newArr;
  } else if (array.length === 1 || array.length === 0) {
    return [];
  }
}

assertEqual(tail(words).length, 3);


