const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🪀 🪀 🪀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countOnly = function(allItems, itemsToCount) {
  let finalCount = {};
  for (const key in itemsToCount) {
   

    allItems.forEach((item) => {
      if (item === key && itemsToCount[key]) {
        if (!finalCount[key]){
          finalCount[key] = 1;
        } else {
          finalCount[key] += 1;
        }
       
       }
        });

    // if (itemsToCount[key]) {
    //   finalCount[key];
    //   console.log(finalCount);
    // }
    // // for (let i = 0; i < allItems.length; i++) {
    //   if (allItems[i].includes(keys)) {
    //     finalCount[allItems[i]] = finalCount[allItems[i]] + 1;
    //   }
    // }
    // console.log(`inside first for loop${finalCount}`);

  }
  console.log(finalCount);
  return finalCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);