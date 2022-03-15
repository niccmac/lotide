const assert = require(`chai`).assert;
const letterPositions = require(`../letterPositions`);

describe(`Checks letterPositions function`, () => {

  it(`Checks index of input in array:`, () => {
    assert.deepEqual(letterPositions("hello").e,[1]);
  });
});