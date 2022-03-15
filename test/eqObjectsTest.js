const assert = require(`chai`).assert;
const eqObjects = require(``);

describe(`Checks eqObjects function:`, () => {
  it(`check two objects return true`, () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), "true");
  });
  
  it(`checks two objects one with more keys is false:`, () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(ab, abc), "false");
  });

  it(`checks two objects with arrays as values, numbers and strings:`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc),"true");
  });

  it(`checks two objects with arrays as values, arrays not equal is false:`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, cd2), "false");
  });


});
