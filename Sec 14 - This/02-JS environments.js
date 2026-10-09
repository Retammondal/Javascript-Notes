// ------------------------------------------------------------------------------------------------------
// Part 1: JavaScript Environments
// ------------------------------------------------------------------------------------------------------
// To run JS we have 2 Environments --> Node.js & Browser.
// Initially, JS ran only in the Browser (each browser contains a separate engine to run JS).
// Then Node.js came along to run JS directly on your computer by extracting those engine properties.


// ------------------------------------------------------------------------------------------------------
// Part 2: Top-Level 'this' vs. Function 'this'
// ------------------------------------------------------------------------------------------------------

console.log(this);                                      // {} Empty Object      -- Node.js 
                                                        // Global/Window Object -- Browser

function fun1() {
    console.log(this);                                  // Global Object (in BOTH Node.js and Browser!)
                                                        // Why? Standalone functions default to global
}
fun1(); 


// ------------------------------------------------------------------------------------------------------
// Part 3: The Global Object & 'this' (Browser vs. Node.js)
// ------------------------------------------------------------------------------------------------------
// 'globalThis' was introduced to provide a standard way to access the global object everywhere.

// ---------------------------------------------------------
// 1. In Browser Environment
// ---------------------------------------------------------
console.log(this);                                      // Output: Window {...}
console.log(window);                                    // Output: Window {...}
console.log(globalThis);                                // Output: Window {...}

console.log(this === window);                           // Output: true (Global scope 'this' is Window)
console.log(this === globalThis);                       // Output: true


// ---------------------------------------------------------
// 2. In Node.js Environment
// ---------------------------------------------------------
console.log(this);                                      // Output: {} (Empty object!) 
                                                        // 💡 In Node, top-level 'this' is module.exports

console.log(global);                                    // Output: Object [global] {...}
console.log(globalThis);                                // Output: Object [global] {...}

console.log(this === global);                           // Output: false ❌ ('this' is NOT global in Node)
console.log(globalThis === global);                     // Output: true ✅ (globalThis is the standard)


// ------------------------------------------------------------------------------------------------------
// Part 4: What exactly is the Global Object?
// ------------------------------------------------------------------------------------------------------
// Global Object --> TopMost Object (GlobalThis) --> Contains all the core built-in functions.
// Because it acts as the absolute top parent, in a browser we can also access global functions 
// directly via 'this', like this.setTimeout().