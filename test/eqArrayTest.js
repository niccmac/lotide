const { assert } = require("chai");
// const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);


describe(`Check eqArray function:`, () => {
  it(`checks array that is equal`, () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
  it(`checks array that is not equal`, () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]),false);
  });
  it(`checks array of strings that is equal`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
  });
  it(`checks array of strings that is not equal string/number`, () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
  });
});