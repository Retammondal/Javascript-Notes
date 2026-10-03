// 'in' operator is to check if a specific key (property name) exists in an object or its prototype chain
// Checks for keys/property names, NOT values.
// Syntax : "key" in object

let object = { name: "Retam", age: 16 };  
let array = ["name", "age"];              

let checkInObj = "name" in object;         // ✅ true - "name" is a key in the object
let checkInObjValue = "Retam" in object;   // ❌ false - "Retam" is a VALUE, not a key
let checkInArr = "name" in array;          // ❌ false - "name" is not an index in the array

console.log(checkInObj);
console.log(checkInObjValue);
console.log(checkInArr);

// ----------------------------------------------------------------------------------------------------
// The in Operator with Arrays
// ----------------------------------------------------------------------------------------------------
// In JS Array; For Arrays : Keys are their Index Numbers
let fruits = ["apple", "banana", "mango"];

// Checking index numbers (keys)
console.log(1 in fruits);        // ✅ true - index 1 exists
console.log(3 in fruits);        // ❌ false - index 3 doesn't exist

// ----------------------------------------------------------------------------------------------------
// Alternative Method : object.hasOwnProperty(key) --> true/false
// ----------------------------------------------------------------------------------------------------
console.log(object.hasOwnProperty("name"));         // true
console.log(object.hasOwnProperty("Name"));         // false : Case Sensitive Keep in Mind
console.log(object.hasOwnProperty("Retam"));        // false