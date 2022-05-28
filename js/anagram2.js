var anagram = require("./characterMatch.js");

exports.anagramsFor = function (word, listOfWords) {
  let newList = [];
  for (let item of listOfWords) {
    if (anagram.isCharacterMatch(word, item)) {
      newList.push(item);
    }
  }
  return newList;
};
