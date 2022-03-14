const assertArrayEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);
const assertEqual = require(`../assertEqual`);
const assert = require(`chai`).assert;

// assertEqual(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]),"Arrays do match.");
// assertEqual(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]),"Arrays do match.");
// assertEqual(assertArrayEqual(middle([1, 2]),[]),"Arrays do match.");

describe(`#middle`, () => {
  it(`[1, 2, 3, 4, 5, 6] should return Arrays do match.`, () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]),"Arrays do match.");
  });
});
describe(`#middle`, () => {
  it(`[1, 2, 3, 4, 5] should return Arrays do match.`, () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]),"Arrays do match.");
  });
});
describe(`#middle`, () => {
  it(`[1, 2] should return Arrays do match.`, () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2]),[]),"Arrays do match.");
  });
});
