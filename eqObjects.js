const eqArrays = require(`../lotide/eq`);

// console.log("here");

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return `🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     return `🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`;
//   }
// };

const eqObjects = function(objOne, objTwo) {
  let objOneLength = Object.keys(objOne).length;
  let objTwoLength = Object.keys(objTwo).length;
  
  if (objTwoLength !== objOneLength) {
    return false;
  }
  for (let key in objOne) {
    if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      let testOb;
      testOb   = eqArrays(objOne[key],objTwo[key]);
      if (!testOb) {
        return false;
      }
    } else if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
 
};
module.exports = eqObjects;