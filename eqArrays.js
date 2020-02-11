const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;

