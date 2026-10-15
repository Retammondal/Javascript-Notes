// DOM --> Document Object Model

// Converts any HTML Structure to Tree-based Object model
// -------------------------------------------------------------
// Window Object (Global Object) 
//      V
// Document (DOM document Object)
//      V
// Elements (div,p, h1,...)
//      V
// Sub-Elements
//      V
// Attributes/ text

// --------------------------------------------------------------------------------- 
// DOM Chain
// --------------------------------------------------------------------------------- 
//      document → div#parent → p.child → span#target


console.log(window);                // The global window object
console.log(document);              // The DOM document object
console.log(window.document);       // Same as document
console.log(document === window.document);      // true

// Under document DOM all are there, so we have to call using document object

console.log(document.body);             // Give body html codes
//console.log(body);                    // Error, body is not a global variable on its own. 
// console.log(document.body.h1);       // Error

// *** After body, can't get using console..