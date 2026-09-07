// NaN is NOT equal to NaN
console.log(NaN === NaN);                   // false

// How to check for NaN
let result = "Hi" - 6;                      // NaN
console.log(result === NaN);                // false (WRONG way)
console.log(Number.isNaN(result));          // true (CORRECT way)

// Objects are compared by reference, not content
console.log({} == {});                      // false (different objects)
console.log([] == []);                      // false (different arrays)
console.log(null === null);                 // true (same value)

// Arrays are objects, so they don't compare by content:
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 == arr2);                  // false

// But primitive values work:
console.log(1 === 1);                       // true
console.log("hello" === "hello");           // true