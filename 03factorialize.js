//* Factorialize a Number

//? Return the factorial of the provided integer.

function factorialize(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorialize(5));
