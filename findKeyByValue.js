const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function(object, value) {
  let returnKey;
  
  for (let key in object) {
    if (object[key] === value) {
      returnKey = key;
    }
  }
  return returnKey;
};
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));