const letterPositions = function(string) {

  const results = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {

      if (!results[string[i]]) {
        results[string[i]] = [i];

      } else {
        results[string[i]].push(i);
      }
    }
  }
  
  return results;
};



const assertArrayEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return console.log("Arrays do not match.");
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return console.log("Arrays do not match.");
    }
  }

  return ("Arrays do match.");
};
// console.log(letterPositions("hello"));
// console.log(assertArrayEqual(letterPositions("hello").e,[1]));

module.exports = letterPositions;