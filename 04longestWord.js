//* Find the Longest Word in a String

//? Return the length of the longest word in the provided sentence.Your response should be a number.

function findLongestWordLength(str) {
  let longestWord = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let individualWord = words[i];
    if (individualWord.length > longestWord.length) {
      longestWord = individualWord;
    }
  }
  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
