// ------------------------------------------------------------------------------------------------------
// Part 1: The Global Object
// ------------------------------------------------------------------------------------------------------
// Global Object --> TopMost Object (globalThis) --> contains all the built-in functions.
// Because it is the top parent, we can also access these functions directly like this.functionName().


// ------------------------------------------------------------------------------------------------------
// Part 2: Strict Mode ("use strict")
// ------------------------------------------------------------------------------------------------------
// "use strict" opts a script or function into JavaScript's strict mode.
// It forces the execution engine to run under a more restrictive set of rules, changing silent 
// mistakes into explicit runtime or syntax errors.

// Where to place it:
// • Global Scope: Placed at the top of a script file, it applies to all code within that script.
// • Local Scope: Placed at the beginning of a function body, it applies strictly to that function.

// "use strict";

// ---------------------------------------------------------
// Effect 1: Eliminates Accidental Global Variables
// ---------------------------------------------------------
// misspelledVariable = 10;                             // ❌ Throws ReferenceError: not defined


// ---------------------------------------------------------
// Effect 2: Restricts the 'this' Keyword
// ---------------------------------------------------------
// In normal (sloppy) mode, if a plain function is called without a clear owner object, 
// 'this' defaults to the global Window/Global object. 
// In strict mode, 'this' remains undefined, preventing accidental modifications to the global scope.

function showThis() {
    console.log(this); 
}

showThis();                                             // ❌ Logs: undefined (Would be Window in sloppy mode)


// ------------------------------------------------------------------------------------------------------
// Part 3: Top-Level Variables and the Global Object ('this')
// ------------------------------------------------------------------------------------------------------
// var         -> Attaches to the global object (Window) in the Browser ONLY. (Not in Node.js).
// let & const -> NEVER attach to the global object, so they cannot be accessed via 'this'.

var name = "Retam";                                     // Note: If you change this to 'let', the Browser 
                                                        // output will also become undefined.

function showName() {
    console.log(this.name);                             // Browser Output: "Retam"
                                                        // Node.js Output: undefined
}

showName();                                             // Called globally. 'this' defaults to Global object.