// By Directly calling the function in Global --> We get Global Object by this
// ---------------------------------------------------------------------------------------------------

// In browser (non-strict mode)
function showThis() {
    console.log(this);
}
showThis();                     // Window {...}


// In Node.js (non-strict mode)
function showThis() {
    console.log(this);
}
showThis();                     // Global {...}
console.log(this);              // {}


// In STRICT MODE - 'this' is undefined
"use strict";
function showThis() {
    console.log(this);
}
showThis();                     // undefined


// ---------------------------------------------------------------------------------------------------
//  Strict Mode...
// ---------------------------------------------------------------------------------------------------

"use strict";                   // Must have to write at top of Your code

// ❌ Without declaration - ERROR
// name = "Retam";              // ReferenceError: name is not defined

// ✅ Proper declaration
let name = "Retam";
console.log(name);              // "Retam"

function showThis() {
    console.log(this);          // undefined
}
showThis();