const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;