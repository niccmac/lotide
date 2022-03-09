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

const middle = function (array) {
  let elementMiddleIndex = [];
  let middleIndex;
  if (array.length <= 2) {
    return elementMiddleIndex;
  } else if (array.length % 2 === 0) {
    middleIndex = (array.length / 2) - 1;
    elementMiddleIndex.push(array[middleIndex]);
    elementMiddleIndex.push(array[middleIndex + 1]);
  } else {
    middleIndex = Math.ceil(array.length / 2) - 1;
    elementMiddleIndex.push(array[middleIndex]);
  }

  return elementMiddleIndex;
};


assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);