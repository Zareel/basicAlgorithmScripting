//* Slice and Splice

//? Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs

function frankenSplice(arr1, arr2, n) {
  let newArr2 = [...arr2];
  newArr2.splice(n, 0, ...arr1);
  return newArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
