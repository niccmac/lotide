const assertArrayEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return ("Arrays do not match.");
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return ("Arrays do not match.");
    }
  }

  return ("Arrays do match.");
};