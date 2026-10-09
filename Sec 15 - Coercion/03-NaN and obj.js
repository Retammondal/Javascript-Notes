// ------------------------------------------------------------------------------------------------------
// Part 1: Value vs. Reference Comparison
// ------------------------------------------------------------------------------------------------------
// Primitives are compared by VALUE. Objects and Arrays are compared by REFERENCE (memory address).

// 1. Primitives (Strings, Numbers, Booleans, null) -> Compared by their actual content/value.
console.log(1 === 1);                                   // Output: true
console.log("hello" === "hello");                       // Output: true
console.log(null === null);                             // Output: true
console.log(true === false);                            // Output: false


// 2. Objects and Arrays -> Compared by Reference (Memory Address), NOT by their content.
console.log({} == {});                                  // Output: false (Different object references)
console.log([] == []);                                  // Output: false (Different array references)

const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 == arr2);                              // Output: false (They look identical, but they 
                                                        // are stored in different memory locations)

// To make them equal, they must point to the exact same reference in memory:
const arr3 = arr1;                                      // Copying the reference
console.log(arr1 === arr3);                             // Output: true (They share the same memory address)

console.log("----------------------------------------------------------");
// ------------------------------------------------------------------------------------------------------
// Part 2: The NaN Exception (Not-a-Number)
// ------------------------------------------------------------------------------------------------------
// NaN is a primitive numeric value, but it is the ONLY value in JavaScript that is not equal to itself.

console.log(NaN === NaN);                               // Output: false ❌

// How to properly check for NaN:
let result = "Hi" - 6;                                  // Evaluates to NaN
console.log(result === NaN);                            // Output: false (WRONG way to check)
console.log(Number.isNaN(result));                      // Output: true  (CORRECT way to check) ✅


// ---------------------------------------------------------
// 💡 AI Note: How does NaN actually happen?
// ---------------------------------------------------------
// NaN is generated when a mathematical operation fails or cannot yield a valid number:
// 1. Math with non-numeric strings  ->  "apple" / 2            (NaN)
// 2. Math with undefined            ->  5 + undefined          (NaN)
// 3. Parsing invalid strings        ->  Number("hello")        (NaN)
// 4. Invalid math operations        ->  0 / 0                  (NaN)


