exports.isCharacterMatch = function (string1, string2) {
  let isAnagram = true;
  let lowerString1 = string1.toLowerCase();
  let lowerString2 = string2.toLowerCase();
  for (let i of lowerString1) {
    if (!lowerString2.includes(i)) {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
};
