// ---------------------------------------------------------------------------------------------------
// 1. Variable Destruction
// ---------------------------------------------------------------------------------------------------
// after running function call successfully it destroys it's variables

function normalFunction() {
    let message = "Hello!";
    console.log(message);
}
normalFunction(); // Logs: "Hello!"
// After this, the 'message' variable is destroyed forever

// ---------------------------------------------------------------------------------------------------
// 2. Variable Not Destroyed -- Closures
// ---------------------------------------------------------------------------------------------------
// when it will not be able to destroy variables?

function hello() {
    let city = "Varanasi"; // Parent variable
    
    function gello() {
        console.log(city); // Inner function uses parent variable
    }
    
    return gello;
}

// Step 1: Execute hello() - returns gello and finishes
// Normally, 'city' would be destroyed now...
let retam = hello();

// Step 2: Execute the returned function later
retam(); // Output: "Varanasi" - city is still alive!
console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------------
// 3. Snapshots vs Reference
// ---------------------------------------------------------------------------------------------------
// Snapshots -- exact copy and store in new variable
let x = 5;
let y = x;      // y gets copy of x value and stored
x = 10;
console.log(y); // still give 5

// Reference as a Function
let count = 0;
function counter(){     // a function defining, everytime it calls, increases count by 1
    count += 1;
}
count = 10;

counter();              // count = 1 ❌ ; count = 4+1 = 5 ✅ (Reference)
counter();
counter();
console.log(count);
console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------------
// 4. Closures take Reference not Snapshot
// ---------------------------------------------------------------------------------------------------
function outer() {
    let count = 0;
    
    function inner() {
        count = count + 1; // Uses a REFERENCE to count
        console.log(count);
    }
    
    return inner;
}

const myCounter = outer();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3 - Keeps changing because it has a REFERENCE
console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------------
// 5. Closure + Execution Context
// ---------------------------------------------------------------------------------------------------

function outter() {
    let count = 0; // Created fresh each time outter() is called
    
    function counter() {
        count = count + 1;
        console.log(count);
    }
    return counter;
}

const counter3 = outter(); // Creates new context with count=0
const counter4 = outter(); // Creates ANOTHER new context with count=0

counter3();         // 1 (modifies counter1's count)
counter4();         // 1 (modifies counter2's count - different context!)
counter3();         // 2 (modifies counter1's count again)
counter4();         // 2 (modifies counter2's count again)

outter()();         // 1
outter()();         // 1
outter()();         // 1
console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------------
// 4. Reference use + Function + Execution Context
// ---------------------------------------------------------------------------------------------------

let count2 = 0;
function counter2(){     // a function defining, everytime it calls, increases count by 1
    count2 += 1;
}

const counter1st = counter2;
const counter2nd = counter2;
counter1st();       // 1
counter1st();       // 2
counter2nd();       // 3
    // Why here not creating different context?
    // b/c it's in Global scope; its variables always keeps in memory
    // no need to create new closure for different context
console.log(count2);