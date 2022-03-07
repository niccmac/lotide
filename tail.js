const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
const words = [1];
tail(words);
assertEqual(tail(words).length, 3);
