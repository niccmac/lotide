

console.log("here");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`;
  }
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba), "true");
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc), "false");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc),"true");

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2), "false");