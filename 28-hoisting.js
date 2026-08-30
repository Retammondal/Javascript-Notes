// How is JS code Executed?
// happens in 2 phase top to down
// 1. Creation Phase - Memory allocation
        // variables and function gets memory but ther are undefined till now..no value assigned
        // function copy and paste into memory
// 2. Execution Phase
        // value assigned to variable and functions....
        // value assign, +,-, console.log(), function invoke happens in this phase

// Temporal Dead Zone -> Time from Variable Creation to Initialization/allocation
// in this time if we call it, will result to Error
// ###############################################################################

// Global Execution Context is created here
let globalVar = "I'm global";

function myFunction() {
    // A NEW Function Execution Context is created
    // every time this function is called
    let localVar = "I'm local";
    console.log(localVar);
}

myFunction(); // Function Execution Context #1 created
myFunction(); // Function Execution Context #2 created (NEW!)

// ###############################################################################

// Hoisting Behaviour with Variables

// var, let & const all are hoisted
// 1. CREATION PHASE
// var       -> it initialized with Undefined
// let,const -> NOT initialized. The engine knows they exist

// 2. EXECUTION PHASE
// var          -> calling it early will result Undefined
// let, const   -> calling it early will throw Reference Error, b/c value not assigned till now..

// ###############################################################################

// Let's trace this code:
// console.log(a);        // Output: undefined (from Creation Phase)
// console.log(b);        // ❌ ReferenceError: b is not initialized (TDZ)
console.log(add(2, 3)); // Output: 5 (add exists from Creation Phase)

var a = 5;            // Execution Phase: a gets value 5
let b = 10;           // Execution Phase: b gets value 10

function add(x, y) {
    return x + y;
}

var fun = function() { // Execution Phase: fun gets function reference
    console.log("Hello");
};

console.log("----------------------------------------------------------");

// Hoisiting Behaviour with Function
// Function Declaration get complete function loaded in memory in Creation phase...
// so value are already assinged, you are ready to use at any point
// Function Expression get treated as Variables, so value not assigned
functionDeclaration()
function functionDeclaration(){
    console.log("Function");
}

// functionDeclarationvar() // error functionDeclaration1 is not a function
var functionExpressionvar =function(){
    console.log("Function Expression given in Var");
}

// functionDeclaration2() // Cannot access 'functionDeclaration2' before initialization
let functionExpressionlet =function(){
    console.log("Function Expression given in Let");
}

functionExpressionlet();
functionExpressionvar();

console.log("----------------------------------------------------------");

// JS Execution Phase (with function)
// Why num1 and num2 inside one, not outside -> Due to Scope Chain

let num1 = 4;
function random1(){
    console.log(num1);
    let num1=3;
}

var num2 = 4;
function random2(){
    console.log(num2);
    var num2=3;
}

// random1() // Error? random1 crashes because let blocks access before its line runs
random2() // Undefined? random2 prints undefined because var initializes early.




