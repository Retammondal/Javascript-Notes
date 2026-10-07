// ------------------------------------------------------------------------------------------------------
// The Global Object & 'this': Browser vs. Node.js
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