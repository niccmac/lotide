const takeUntil = function(array, callback) {
  let returnArray = [];
  for (let element of array) {
    if (!callback(element)) {
      returnArray.push(element);
    } else {
      return returnArray;
    }
  }
  return returnArray;
};
//TEST CODE



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log("this is results 1",results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log("This is results 2",results2);


const assertArrayEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return ("Arrays do not match.");
  }
  
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return ("Arrays do not match.");
    }
  }

  return ("Arrays do match.");
};

console.log(assertArrayEqual(results1,[ 1, 2, 5, 7, 2 ]));
console.log(assertArrayEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));