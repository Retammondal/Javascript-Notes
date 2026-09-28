// Spread Operator
// ...Object

// ---------------------------------------------------------------------------------------
// Problem
// ---------------------------------------------------------------------------------------
let obj = {name : "Retam", age: 16};
// NOte : Spread operator is designed for Iterables but Object is not iterable
// console.log(...obj);             // Error!! as We can't spread a Object

// ---------------------------------------------------------------------------------------
// Special Hack -- Copying Object
// ---------------------------------------------------------------------------------------
// If we use Spreaded Object in New Object it copies properties in new

let newObj = {...obj}
console.log(newObj);

// ---------------------------------------------------------------------------------------
// Special Hack -- Merging Object
// ---------------------------------------------------------------------------------------
// If two objects have the same key, the one spread last wins and overwrites the previous one.

let address = {age: 17, village : "Mallickpur", postoffice : "Falta", policestation : "Falta"}

let studentDetails1 = {obj, address}             // Wrong !! Nested object
let studentDetails2 = {...obj, ...address}       // Correct !! Latest age will be updated

console.log(studentDetails1);
console.log(studentDetails2);