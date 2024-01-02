//* Mutations

//? Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

let arr = ["shine", "shon"];

function mutation(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    let letters = secondWord[i];
    if (firstWord.indexOf(letters) === -1) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"])); // will display false
