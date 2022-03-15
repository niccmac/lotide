const assertEqual = require(`../assertEqual`);
const tail = require(`../tail`);
const assert = require(`chai`).assert;


// const words = [1, 2, 3, 4];
// assertEqual(tail(words).length, 3);

describe(`checks tail function`, () => {
  it(`should return [2,3,4] when argument is [1,2,3,4]`, () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });
});