// const eqArrays = function(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }
  
//   for (let i = 0; i < secondArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }

//   return true;
// };

const assertArrayEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return "Arrays do not match.";
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return "Arrays do not match.";
    }
  }

  return "Arrays do match.";
};

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};
console.log(assertArrayEqual((flatten([1, 2, [3, 4], 5, [6]])),[ 1, 2, 3, 4, 5, 6 ]));