// Give Input --> Function --> Output (return Output)
// If No return explicitly given , by default return undefined
// returned output either store in a variable or directly print
// Print != return

// ------------------------------------------------------------------------------------------------------
// 1. Print is not equal to Return
// ------------------------------------------------------------------------------------------------------

function addNum(a,b){
    console.log(`Adding two numbers ${a} and ${b}`);
    return a+b
}
console.log("\n--- 1. Directly Calling the Function ---");
addNum(5,6); 
    // By calling print will happen ✅
    // Returned value will not show ❌

console.log("\n--- 2. Printing the Call by the Function ---");
console.log(addNum(6,7));   // --> Directly print the call
    // Prints the inner part ✅ --> Not due to this Console.log; due to Calling & Inside Console.log
    // prints the return value ✅
console.log(addNum(7,8));

console.log("\n--- 3. Storing the function in var, then print ---");
const store = addNum(4,6);
console.log(store);
console.log(store);

console.log("----------------------------------------------------------");
// ------------------------------------------------------------------------------------------------------
// Function Calls vs. Storing Returned Values
// ------------------------------------------------------------------------------------------------------
// Can you see something?? 
// WHY? By storing a function call in a variable, it executes ONCE and saves the Return value directly.
// So every time we log that variable later, it just prints the saved value without re-running the function.

function testFunction() {
    console.log("-> Inner print executed!");    // This is the "inner print"
    return "Final Output";                      // This is the returned value
}

// ---------------------------------------------------------
// Scenario 1: Calling the function directly
// ---------------------------------------------------------
console.log(testFunction());                    // Runs function: Inner print happens, then logs "Final Output"
console.log(testFunction());                    // Runs function AGAIN: Inner print repeats!


// ---------------------------------------------------------
// Scenario 2: Storing the call in a variable
// ---------------------------------------------------------
const savedResult = testFunction();             // Runs function ONCE: Inner print happens here. Result is saved.

console.log(savedResult);                       // No inner print! Just outputs the saved "Final Output"
console.log(savedResult);                       // No inner print! Just outputs the saved "Final Output"




// ----------------------------------------------------------
// 2. Return anything from a Function
// ----------------------------------------------------------
// 1. If you don't explicitly return anything, function returns `undefined` by default
// 2. Once `return` is executed, the function stops running immediately
// 3. You can only return one value (but it can be an object/array containing multiple values)

console.log("\n--- 1. Returning Boolean ---");

function check(a){
    if (a>5)
        return true;
    else
        return null;
}
console.log(check(7));
console.log(check(4));
