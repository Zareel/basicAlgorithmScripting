//* Title Case a Sentence

//? Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  str = str.split(" ");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let firstLetter = str[i].slice(0, 1).toUpperCase();
    let restOfTheLetters = str[i].slice(1, str[i].length).toLowerCase();
    arr.push(firstLetter + restOfTheLetters);
  }

  return arr.join(" ");
}

console.log(titleCase("I'm a liTTle tAa poT"));
