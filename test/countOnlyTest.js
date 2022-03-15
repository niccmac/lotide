const countOnly = require(`/Users/nicolemaclean/Desktop/lighthouse/lotide/countOnly.js`);
const assert = require(`chai`).assert;

describe(`Check countOnly function`, () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  let values = {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  };

  it(`count 1 key with value:`, () => {
    assert.deepEqual(countOnly(firstNames, values),{ Jason: 1, Fang: 2 });
  });
});