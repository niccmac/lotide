const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
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

(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true));
(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false));
(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true));
(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false));

// first time I've had a code review with a mentor, very helpful.