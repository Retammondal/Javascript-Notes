// Slice - Trim any array
// .slice is a Method
// .slice(startIndex, endIndex)
// start included, end excluded

let arr = [2,5,6,7,8,9,3,25];
let arr1 = arr.slice(3,5);
console.log(arr);
console.log(arr1);

// NOTE: slice is Immutable ; it doesn't update old variable it create new one..