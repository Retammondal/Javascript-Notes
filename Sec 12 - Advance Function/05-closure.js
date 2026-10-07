// ------------------------------------------------------------------------------------------------------
// Closures - The Function’s "Backpack"
// ------------------------------------------------------------------------------------------------------
// A Closure is a function that "remembers" variables from its parent scope (lexical environment) 
// even after the parent function has finished executing. 
// Analogy: An inner function takes a "backpack" of parent variables with it when it leaves.


// ------------------------------------------------------------------------------------------------------
// Part 1: The Problem - Variable Destruction
// ------------------------------------------------------------------------------------------------------
// Normally, local variables are garbage collected (removed from memory) when a function finishes.

function normalFunction() {
    let message = "Hello!";
    console.log(message);
}
normalFunction();                               // Logs: "Hello!"
                                                // After this, 'message' is destroyed forever.

// When does the Garbage Collector FAIL to destroy them?
// 1. Closures: Inner function references outer variables.
// 2. Accidental Globals: Omitting let/const/var (leaks to window/global scope).
// 3. Forgotten Timers: Captured in setInterval/setTimeout or unremoved event listeners.


// ------------------------------------------------------------------------------------------------------
// Part 2: How Closures Preserve Variables
// ------------------------------------------------------------------------------------------------------

function hello() {
    let city = "Varanasi";                      // Parent variable
    
    function gello() {
        console.log(city);                      // Inner function uses parent variable
    }
    return gello;
}

let retam = hello();                            // Step 1: execute hello(). Normally 'city' is destroyed.
retam();                                        // Step 2: "Varanasi"! 'city' is still alive in the backpack!


// ------------------------------------------------------------------------------------------------------
// Part 3: Closures Store References, Not Snapshots
// ------------------------------------------------------------------------------------------------------

// 1. Getting a Snapshot (Value Copy)
let x = 5;
let y = x;                                      // y gets a COPY of x's value (5)
x = 10;
console.log(y);                                 // Output: 5 (y still has the old snapshot value)

// 2. Getting a Reference (Closure)
function outerReference() {
    let count = 0;
    function inner() {
        count = count + 1;                      // Uses a live REFERENCE to the actual variable
        console.log(count);
    }
    return inner;
}

const myCounter = outerReference();
myCounter();                                    // Output: 1
myCounter();                                    // Output: 2
myCounter();                                    // Output: 3 (Changes because it modifies the live reference)


