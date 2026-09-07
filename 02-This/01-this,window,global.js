// In Browser
console.log(this);                  // Window {...}
console.log(window);                // Window {...}
console.log(globalThis);            // Window {...}
console.log(this === window);       // true
console.log(this === globalThis);   // true

// In Node.js
console.log(this);                  // {} (empty object in module scope)
console.log(global);                // Global {...}
console.log(globalThis);            // Global {...}
console.log(this === global);       // false (in Node modules!)
console.log(globalThis === global); // true