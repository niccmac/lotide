const assert  = require(`chai`).assert;
const assertEqual = require('../assertEqual');

// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));

describe(`#assertEqual`, () => {
  it(`Checks that "Lighthouse Labs", "Bootcamp" returns Assertion failed`, () => {
    assert.deepEqual(assertEqual("Lighthouse Labs", "Bootcamp"), `🧨🧨🧨 Assertion Failed: Lighthouse Labs !== Bootcamp`);
  });
});

describe(`#assertEqual`, () => {
  it(`Checks that 1 & 1 returns Assertion passed`, () => {
    assert.deepEqual(assertEqual(1,1), "🪀 🪀 🪀  Assertion Passed: 1 === 1");
  });
});