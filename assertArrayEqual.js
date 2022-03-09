const assertArrayEqual = function(firstArray, secondArray) {
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