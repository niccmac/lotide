const assert = require('chai').assert;
const flatten = require('../flatten');

describe(`checks flatten function:`, () => {
  it(`if array elements are arrays, returns single array of all elements`, () => {
    assert.deepEqual((flatten([1, 2, [3, 4], 5, [6]])),[ 1, 2, 3, 4, 5, 6 ]);
  });
});
