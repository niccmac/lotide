const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
  let mapReturn = [];
  for (let item of array) {
    mapReturn.push(callback(item));
  }
  return mapReturn;
};
const results = map(words, word => word[0]);



// TEST CODE


// const assertArrayEqual = function(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return ("Arrays do not match.");
//   }
  
//   for (let i = 0; i < secondArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return ("Arrays do not match.");
//     }
//   }

//   return ("Arrays do match.");
// };
// const words1 = ["ground1", "control1", "to1", "major1", "tom1"];
// const results1 = map(words, word => word + "1");
// console.log(`results 1`,results1);
// console.log(`words 1`, words1);
// console.log(assertArrayEqual(words1,results1));