const assert = require(`chai`).assert;
const findKeyByValue = require(`../findKeyByValue`);

describe(`Check find key by value:`, () => {
  it(`checks object for value and returns key`, () => {
    assert.equal(
      findKeyByValue({scifi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"}, "The Wire"),
      "drama"
    );
  });
});