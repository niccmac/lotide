const middle = function (array) {
  let elementMiddleIndex = [];
  let middleIndex;
  if (array.length <= 2) {
    return elementMiddleIndex;
  } else if (array.length % 2 === 0) {
    middleIndex = (array.length / 2) - 1;
    elementMiddleIndex.push(array[middleIndex]);
    elementMiddleIndex.push(array[middleIndex + 1]);
  } else {
    middleIndex = Math.ceil(array.length / 2) - 1;
    elementMiddleIndex.push(array[middleIndex]);
  }

  return elementMiddleIndex;
};

module.exports = middle;
