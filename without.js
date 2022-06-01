const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return console.log("Arrays do not match.");
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return console.log("Arrays do not match.");
    }
  }

  console.log("Arrays do match.");
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};

const without = function(source, itemsToRemove) {
  let sourceWithout = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      sourceWithout.push(source[i]);
    }
  }
  return (sourceWithout);
};

module.exports = without;

