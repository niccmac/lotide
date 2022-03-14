const countOnly = require("./countOnly");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
const countLetters = function(string) {
  let returnCount = {};
  let noSpaceString = string.replaceAll(" ", "");
  for (let chara of noSpaceString) {
    if (!returnCount[chara]) {
      returnCount[chara] = 1;
    } else {
      returnCount[chara] += 1;
    }
  }
  return returnCount;
};
let string = `This is a string of words.`;
console.log(countLetters(string));

module.exports = countLetters;