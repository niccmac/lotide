const map = function(array, callback) {
  let mapReturn = [];
  for (let item of array) {
    mapReturn.push(callback(item));
  }
  return mapReturn;
};

module.exports = map;