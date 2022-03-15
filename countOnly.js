const countOnly = function (allItems, itemsToCount) {
  let finalCount = {};
  for (const key in itemsToCount) {
    allItems.forEach((item) => {
      if (item === key && itemsToCount[key]) {
        if (!finalCount[key]) {
          finalCount[key] = 1;
        } else {
          finalCount[key] += 1;
        }
      }
    });
  }
  
  return finalCount;
};

module.exports = countOnly;
