// join() method converts all elements of an array into a single string?
// Immutable --> Don't Modify Original array
// Syntax : array.join(separator);

const fruits = ["Apple", "Banana", "Orange"];

// 1. Default (no separator) - uses comma
console.log(fruits.join());           // "Apple,Banana,Orange"

// 2. Custom separator
console.log(fruits.join(" + "));      // "Apple + Banana + Orange"

// 3. Empty string (no separator)
console.log(fruits.join(""));         // "AppleBananaOrange"

console.log("----------------------------------------------------------");

// ----------------------------------------------------------------------------------------------------
// All Datatype ---converts to---> String
// ----------------------------------------------------------------------------------------------------
// 1. Empty Array       --->  Empty String("")
// 2. null, undefined   --->  Empty String("")
// 3. Empty Slots       --->  Empty String("")
// 4. Number/Boolean    --->  String

const emptyArray = []
const array = [null, undefined, 23, 32.4, true, "Retam"]
console.log(array.join());