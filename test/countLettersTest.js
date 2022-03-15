const assert = require('chai').assert;
const countLetters = require(`../countLetters`);

describe(`Checks count letters function`, () => {
  it(`should return number of each letter in string:`, () => {
    assert.deepEqual(countLetters("Nicole MacLean"), { n: 2, i: 1, c: 2, o: 1, l: 2, e: 2, m: 1, a: 2 });
  });
});


