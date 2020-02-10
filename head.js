
function head(array){
  if (array.length >= 1) { 
    return array[0];
  } else if (array.length === 0){
    return undefined;
  }
}

module.exports = head;