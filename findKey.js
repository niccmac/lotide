let findKey = function(object, callbackFunc) {
  for (let key in object) {
    if (callbackFunc(object[key])) {
      console.log("Object is", key);
      return key;
    }
  
  }

};

module.exports = findKey;