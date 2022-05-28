var ana = require("./anagram2"),
  listOfWords = [
    "threads",
    "sister",
    "bowler",
    "trashed",
    "marbles",
    "resits",
    "hardest",
    "blower",
    "rambles",
    "hatreds",
    "resist",
    "hounds",
    "blamers",
  ];

console.log(ana.anagramsFor("threads", listOfWords).length == 4);
console.log(
  JSON.stringify(ana.anagramsFor("threads", listOfWords)) ==
    JSON.stringify(["threads", "trashed", "hardest", "hatreds"])
);
console.log(
  JSON.stringify(ana.anagramsFor("marbles", listOfWords)) ==
    JSON.stringify(["marbles", "rambles", "blamers"])
);
console.log(
  JSON.stringify(ana.anagramsFor("sister", listOfWords)) ==
    JSON.stringify(["sister", "resits", "resist"])
);
console.log(
  JSON.stringify(ana.anagramsFor("bowler", listOfWords)) ==
    JSON.stringify(["bowler", "blower"])
);

console.log(ana.anagramsFor("apple", listOfWords).length == 0);
