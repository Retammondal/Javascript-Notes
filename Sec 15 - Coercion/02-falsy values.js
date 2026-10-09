// ------------------------------------------------------------------------------------------------------
// Truthy and Falsy Values in JavaScript
// ------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------
// Part 1: The 8 Falsy Values (Always evaluate to false)
// ---------------------------------------------------------
// false, 0, -0, 0n, "", undefined, null, NaN

console.log(Boolean(false));                            // Output: false
console.log(Boolean(0));                                // Output: false
console.log(Boolean(-0));                               // Output: false
console.log(Boolean(0n));                               // Output: false (BigInt zero)
console.log(Boolean(""));                               // Output: false (Empty string '', "", or ``)
console.log(Boolean(undefined));                        // Output: false
console.log(Boolean(null));                             // Output: false
console.log(Boolean(NaN));                              // Output: false (Not a Number)


// ---------------------------------------------------------
// Part 2: Common Truthy Surprises (Evaluate to true)
// ---------------------------------------------------------
// Rule of thumb: EVERYTHING else not in the list above is inherently truthy.
// Common Mistake : Yes, Empty Array, Objects are also Truthy

console.log(Boolean([]));                               // Output: true (Empty array is TRUE)
console.log(Boolean({}));                               // Output: true (Empty object is TRUE)
console.log(Boolean(" "));                              // Output: true (String with a space is NOT empty)
console.log(Boolean("false"));                          // Output: true (String containing text is TRUE)
console.log(Boolean(-1));                               // Output: true (Any non-zero number is TRUE)


// ---------------------------------------------------------
// Part 3: Quick Tip - Checking Truthiness (!!)
// ---------------------------------------------------------
// Using !! (Double NOT) is the shortest, most common way to force a boolean conversion.
// The first ! converts the value to a boolean and flips it. The second ! flips it back to its true state.

console.log(!!"hello");                                 // Output: true
console.log(!!0);                                       // Output: false
console.log(!![]);                                      // Output: true