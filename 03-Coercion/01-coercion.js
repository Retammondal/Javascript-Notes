// ---------------------------------------------------------------------------------------------------
//  Implicit Coercion
// ---------------------------------------------------------------------------------------------------

// String Concatenation - converts to string
console.log("5" + 4);               // "54" (number → string)
console.log("5" + true);            // "5true" (boolean → string)
console.log("5" + ["Retam"]);       // "5Retam" (array → string)
console.log([] + []);               // "" (both become strings)


// Mathematical Operations - converts to number
console.log("2" * 4);        // 8 (string → number)
console.log(5 - "10");       // -5 (string → number)
console.log(true + 1);       // 2 (true → 1)
console.log(false + 1);      // 1 (false → 0)
console.log(true - true);    // 0 (both → 1 - 1)
console.log("Hi" - 6);       // NaN ("Hi" can't become a number)
console.log([] + {});        // "[object Object]" (both become strings)


// ---------------------------------------------------------------------------------------------------
//  Explicit Coercion
// ---------------------------------------------------------------------------------------------------

// String conversion
console.log(String(123));     // "123"
console.log((123).toString()); // "123"

// Number conversion
console.log(Number("123"));   // 123
console.log(Number("345h"));  // NaN
console.log(parseInt("345h")); // 345
console.log(parseFloat("3.14")); // 3.14

// Boolean conversion
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("hello")); // true
console.log(Boolean([]));     // true
console.log(Boolean({}));     // true

// Using !! (double not) for boolean conversion
console.log(!!"");            // false
console.log(!!"hello");       // true
console.log(!!!!"");          // false (each ! reverses)