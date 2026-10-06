// ------------------------------------------------------------------------------------------------------
// Part 1: How to Call an Inner Function (Nested Function)
// ------------------------------------------------------------------------------------------------------
// Calling Inner Function inside an Outer Function

// ---------------------------------------------------------
// Option 1: Calling Inside Parent Function
// ---------------------------------------------------------
function parentFunc1() {
    function innerFunc1() {
        console.log("Called inside!");
    }
    innerFunc1();                               // ◀ Called here, inside the parent
}

parentFunc1();                                  // Output: "Called inside!"


// ---------------------------------------------------------
// Option 2: Returning the Function Reference
// ---------------------------------------------------------
function parentFunc2() {
    function innerFunc2() {
        console.log("Called from global!");
    }
    return innerFunc2;                          // ◀ Returns the reference (NOT executed yet)
}

const myInner = parentFunc2();                  // Store the returned function in a variable
myInner();                                      // Output: "Called from global!"

parentFunc2()();                                // Call directly without storing (Calls parent, 
                                                // then inner)

// ------------------------------------------------------------------------------------------------------
// Part 2: 'return func' vs 'return func()'
// ------------------------------------------------------------------------------------------------------
// return func   -> Returns the Function Reference (you can call it later).
// return func() -> Returns the Result of Calling the Function (it executes immediately).


// ---------------------------------------------------------
// Scenario A: Returning Function Reference (No return value)
// ---------------------------------------------------------
function outer1() {
    function inner() {
        console.log("Hello from inner!");
    }
    return inner;                               // Returns the FUNCTION itself
}

console.log(outer1);                            // Output: [Function: outer1]
const result1 = outer1();
console.log(result1);                           // Output: [Function: inner]

result1();                                      // Output: "Hello from inner!" ✅
console.log(result1());                         // Output: "Hello from inner!" + undefined 
                                                // (inner returns nothing)

// ---------------------------------------------------------
// Scenario B: Returning Function Reference (With return value)
// ---------------------------------------------------------
function outer2() {
    function inner() {
        console.log("Hello from inner!");
        return 42;                              // inner returns a value
    }
    return inner;                               // Returns the FUNCTION itself
}

const result2 = outer2();
console.log(result2);                           // Output: [Function: inner]

result2();                                      // Output: "Hello from inner!" ✅ (But 42 is 
                                                // returned, not printed) ❌
console.log(result2());                         // Output: "Hello from inner!" ✅ + 42 ✅ 
                                                // (Prints the return value)

// ---------------------------------------------------------
// Scenario C: Returning Function Execution (return func())
// ---------------------------------------------------------
function outer3() {
    function inner() {
        console.log("Hello from inner!");
        return 42;                              // inner returns a value
    }
    return inner();                             // Executes inner IMMEDIATELY and returns its result
}

const result3 = outer3();                       // Output: "Hello from inner!" (inner was 
                                                // executed during assignment!)
                                                
console.log(result3);                           // Output: 42 (the RETURN VALUE of inner)
// result3();                                   // ❌ Error: result3 is a number (42), not a function!