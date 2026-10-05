// ------------------------------------------------------------------------------------------------------
// Part 1 & 2: Execution Context & The Two Phases of Execution
// ------------------------------------------------------------------------------------------------------
// How is JS code Executed? Happens in 2 phases (Top to Down)
// 1. Creation Phase (Memory Allocation): Variables/functions get memory (variables = undefined). 
// 2. Execution Phase: Values assigned to variables. Expressions and function invocations happen here.

let globalVar = "I'm global";                   // Global Execution Context is created here (Exactly ONE)

function myFunction() {                         // A NEW Function Execution Context is created every call
    let localVar = "I'm local";
    console.log(localVar);
}

myFunction();                                   // Function Execution Context #1 created
myFunction();                                   // Function Execution Context #2 created (NEW!)


// ------------------------------------------------------------------------------------------------------
// Part 3 & 4: Hoisting & The Temporal Dead Zone (TDZ)
// ------------------------------------------------------------------------------------------------------
// Hoisting: Moving declarations to the top of their scope during Creation Phase.
// - var gets initialized with 'undefined'.
// - let & const enter the Temporal Dead Zone (TDZ) and are NOT initialized.
// - Function gets entire function code in memory
// Function Expression ~ Variable Hoisting

// console.log(a);                              // Output: undefined (from Creation Phase)
// console.log(b);                              // ❌ ReferenceError: Cannot access 'b' before init (TDZ)
console.log(add(2, 3));                         // ✅ Output: 5 (Function Declarations are fully hoisted)

var a = 5;                                      // Execution Phase: 'a' gets value 5
let b = 10;                                     // Execution Phase: 'b' gets value 10 (TDZ ends here)

function add(x, y) {                            // Function Declaration - fully hoisted
    return x + y;
}


// functionExpressionvar();                     // ❌ TypeError: is not a function (it's undefined right now)
var functionExpressionvar = function() {
    console.log("Given in Var");
};

// functionExpressionlet();                     // ❌ ReferenceError: Cannot access before init (TDZ)
let functionExpressionlet = function() {
    console.log("Given in Let");
};

let num1 = 4;
function random1(){
    // console.log(num1);                       // ❌ Crashes! let blocks access before its line runs (TDZ)
    let num1 = 3;
}

var num2 = 4;
function random2(){
    console.log(num2);                          // ✅ Prints undefined (var initializes early inside this FEC)
    var num2 = 3;
}
