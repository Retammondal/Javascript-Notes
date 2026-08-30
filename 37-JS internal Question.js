// Question 01
console.log(a); // undefined
var a = 5;
console.log(a); // 5

    // During the Creation Phase, var a is hoisted and assigned undefined

console.log("----------------------------------------------------------");

// Question 02
console.log(b);
let b = 10;
    // ReferenceError: Cannot access 'b' before initialization
    // Reason : b is still not initialized; under Temporal zone
console.log("----------------------------------------------------------");

// Question 03
sayHi();

var sayHi = function() {
    console.log("Hi");
};
    // TypeError: sayHi is not a function
    // Reason : var sayHi is hoisted as undefined during Creation Phase
                // undefined() → TypeError (you can't call undefined)
console.log("----------------------------------------------------------");

// Question 04
let x = 10;
{
    let x = 20;
    console.log(x); // Output : 20 ; due to Block-Scoped
}
console.log(x); // Output : 10 ; due to Global Scope
console.log("----------------------------------------------------------");

// Question 05
var y = 10;
{
    console.log(y); // output : 10
    var y = 20; 
    console.log(y); // Output : 20
}
console.log(y);  // Output : 20
    // Reason : var is funcion scoped not block scoped
console.log("----------------------------------------------------------");

// Question 06 --> Lexical Scope
let city = "Mumbai";

function printCity() {
    console.log(city);
}

function caller() {
    let city = "Delhi";
    printCity();
}
caller(); // Mumbai
        // Reason : printCity was written in the global scope, so its lexical scope is global
console.log("----------------------------------------------------------");

// Question 07 --> Scope Chain
let name = "Global";

function outer() {
    let name = "Outer";
    
    function inner() {
        console.log(name);
    }
    inner();
}
outer(); // Outer
    // inner() searches for name in its local scope → Not found

    // Goes to outer scope (the outer() function) → Finds name = "Outer"

    // Stops searching (doesn't go to global)

    // Outputs "Outer"

console.log("----------------------------------------------------------");

// Question 08 --> Call Stack
function A() {
    console.log("A");
    B();
}

function B() {
    console.log("B");
    C();
}

function C() {
    console.log("C");
}

A();

// Output : A B C
// Reason
// 1. Global EC created
// 2. A() called → Push A EC
// 3. Inside A, B() called → Push B EC
// 4. Inside B, C() called → Push C EC
// 5. C() finishes → Pop C EC
// 6. B() finishes → Pop B EC
// 7. A() finishes → Pop A EC
// 8. Back to Global EC