// How to call an Inner Function?

// 1. Call it inside Parent Function 
function parentFunc1() {
    function childFunc1() {
        console.log("It is Child Function");
    }
    childFunc1() // > Called Inside    
}
console.log(`\nCalling Parent Function, but Child Function result is coming -` );
parentFunc1()

// making it new funciton
console.log(`\nCalling Parent Function, but Child Function result is coming -` );
let myNewFunc1 = parentFunc1;
myNewFunc1()

console.log("----------------------------------------------------------");

// 2. Return the Inner Function inside Parent Function
function parentFunc2(){
    function childFunc2(){
        console.log("It is Child Function");
    }
    return childFunc2; // ◀ Returns the blueprint
    // return childFunc2(); It will by default call the function 
}

parentFunc2() // It will return same Blueprint of childFunc2
console.log(parentFunc2); // Function : parentFunc2
console.log(parentFunc2()); // Function : childFunc2

console.log(`\nCalling Parent Function, but Child Function result is coming -` );
let myNewFunc2 = parentFunc2()
myNewFunc2()

// 3. Using Double Parenthesis
parentFunc2()(); // ◀ First () runs parent, second () runs inner

console.log("----------------------------------------------------------");

// PROBLEM I FACED............
// The Problem: Repeating Parent Code
console.log("\nProblem of Repeting Parent Code");
function parentFunc3() {
    console.log("⚠️   PARENT code running (This is the problem!)");
    
    function childFunc3() {
        console.log("✅   CHILD code running");
    }
    return childFunc3;
}

// Every time you do this, the parent logs its message!
parentFunc3()();
parentFunc3()();

// SOLUTION 
console.log("\nSolution 01 of Repeting Parent Code");
// 1. Run the parent ONCE and store the result

const executeChildOnly = parentFunc3(); 
// Output: "⚠️ PARENT code running" (Happens only this one time)

// 2. Now you can call the child directly, bypassing the parent!
executeChildOnly(); // Output: "✅ CHILD code running"
executeChildOnly(); // Output: "✅ CHILD code running"

console.log("----------------------------------------------------------");

// EXAMPLE

function parentFunc4(a, b, c, d) {
    function sumTwo() { return a + b; }
    function mulTwo() { return c * d; }
    
    // Return an anonymous function that handles the choice
    return function(type) {
        if (type === "add") return sumTwo();
        if (type === "multiply") return mulTwo();
    };
}

let calculator = parentFunc4(5, 4, 6, 8);

console.log(calculator("add"));      // Output: 9
console.log(calculator("multiply")); // Output: 20
