// ------------------------------------------------------------------------------------------------------
// Part 1: Implicit Coercion (Automatic Type Conversion)
// ------------------------------------------------------------------------------------------------------

console.log("---------------------------1-------------------------------");
// 1. String Concatenation (+) -> Converts both to String and Concatenates
//      Array --> String     : [val1,val2] --> "val1,val2"
//      Object --> String    : {key : Value} --> "[object Object]"

console.log("5" + 4);                                   // Output: "54" (number → string)
console.log("5" + true);                                // Output: "5true" (boolean → string)
console.log("5" + ["Retam", "Ram"]);                    // Output: "5Retam,Ram" (array → string)
console.log([] + []);                                   // Output: "" (both empty arrays become "")
console.log(["Retam"] + {});                            // Output: "Retam[object Object]" 
console.log({} + {name:"Retam"});

console.log("---------------------------2-------------------------------");
// 2. Mathematical Operations (-, *, /) -> Converts to Number if Possible(Otherwise NaN)
//      Boolean --> Number          : 0/1
//      Object/ Array --> Number    : NaN

console.log("2" * 4);                                   // Output: 8 (string → number)
console.log(5 - "10");                                  // Output: -5 (string → number)
console.log(true + 1);                                  // Output: 2 (true → 1)
console.log(false + 1);                                 // Output: 1 (false → 0)
console.log(true - true);                               // Output: 0 (1 - 1)
console.log("Hi" - 6);                                  // Output: NaN ("Hi" can't become a number)
console.log(["Hi"] - 6);                                  // Output: NaN ("Hi" can't become a number)


console.log("---------------------------3-------------------------------");
// ------------------------------------------------------------------------------------------------------
// Part 2: Explicit Coercion (Manual Type Conversion)
// ------------------------------------------------------------------------------------------------------

// 1. String Conversion
console.log(String(123));                               // Output: "123"
console.log((123).toString());                          // Output: "123"

// 2. Number Conversion
console.log(Number("123"));                             // Output: 123
console.log(Number("345h"));                            // Output: NaN (Number() is strict)
console.log(parseInt("34.5h"));                         // Output: 34 (parseInt reads until it hits a char)
console.log(parseFloat("3.14h"));                       // Output: 3.14

// 3. Boolean Conversion (Falsy values are ONLY: 0, "", null, undefined, NaN, false)
console.log(Boolean(0));                                // Output: false
console.log(Boolean(""));                               // Output: false
console.log(Boolean("hello"));                          // Output: true
console.log(Boolean([]));                               // Output: true (Arrays are always truthy)
console.log(Boolean({}));                               // Output: true (Objects are always truthy)

// 4. Using !! (Double NOT) for quick Boolean conversion
console.log(!!"");                                      // Output: false
console.log(!!"hello");                                 // Output: true
console.log(!!!!"");                                    // Output: false (Each '!' reverses the boolean)