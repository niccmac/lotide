

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
const countLetters = function(string) {
  let returnCount = {};
  let noSpaceString = string.replaceAll(" ", "");
  for (let chara of noSpaceString.toLowerCase()) {
    if (!returnCount[chara]) {
      returnCount[chara] = 1;
    } else {
      returnCount[chara] += 1;
    }
  }
  return returnCount;
};

module.exports = countLetters;