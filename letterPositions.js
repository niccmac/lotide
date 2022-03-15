const letterPositions = function(string) {

  const results = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {

      if (!results[string[i]]) {
        results[string[i]] = [i];

      } else {
        results[string[i]].push(i);
      }
    }
  }
  
  return results;
};

module.exports = letterPositions;