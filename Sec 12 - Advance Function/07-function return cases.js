// ------------------------------------------------------------------------------------------------------
// Part 1: Case of Returning an Object (and Calling it)
// ------------------------------------------------------------------------------------------------------

function countingMachine() {
    let count = 0;
    return {                                            // Outer func returns an object of methods
        increment: function(a = 1) { count += a; },
        decrement: function(a = 1) { count -= a; },
        getCount: function() { return count; }
    };
}

const counter1 = countingMachine();
counter1.increment(3);                                  // count becomes 3
counter1.decrement(2);                                  // count becomes 1
console.log("Counter 1 Count :", counter1.getCount());      // Output: 1

const counter2 = countingMachine();                     // A completely separate, isolated state
counter2.increment(5);
counter2.increment();                                   // defaults to +1
counter2.increment(1);
console.log("Counter 1 Count :", counter2.getCount());      // Output: 7

// ------------------------------------------------------------------------------------------------------
// CONCEPT ==> 

// • Independent Scope: Every time countingMachine() is called, a brand-new environment is created.
// • Isolated State: The 'count' variable inside counter1 is completely separate from counter2.
// • Closures: The returned methods "remember" and lock into the specific environment they were born in.
// • No Shared Memory: Modifying counter1 has absolutely no effect on counter2's private state.
// ------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------
// Part 2: Case of Returning a Function (Closures)
// ------------------------------------------------------------------------------------------------------

function powerOperator(factor) {
    return function(num) {                              // Inner func remembers 'factor' from Outer func
        return num ** factor;
    };
}

const power2 = powerOperator(2);                        // Locks 'factor' to 2
const power3 = powerOperator(3);                        // Locks 'factor' to 3
const power4 = powerOperator(4);                        // Locks 'factor' to 4

console.log(power2(5));                                 // Output: 25 (5^2)
console.log(power3(5));                                 // Output: 125 (5^3)
console.log(power4(5));                                 // Output: 625 (5^4)


// ------------------------------------------------------------------------------------------------------
// Part 3: Case of Returning an Object with Parameterized Methods
// ------------------------------------------------------------------------------------------------------

function mathOperator(factor) {
    return {
        Multiply: (num) => num * factor,
        Divide:   (num) => num / factor,
        Addition: (num) => num + factor,
        Subtract: (num) => num - factor                 // (Fixed typo: Original had 'Divide' twice)
    };
}

const operateWith4 = mathOperator(4);                   // 'factor' is now permanently fixed to 4
console.log(operateWith4.Multiply(5));                  // Output: 20
console.log(operateWith4.Addition(5));                  // Output: 9


// ------------------------------------------------------------------------------------------------------
// CONCEPT ==> 
    
    // 💡 IMPORTANT IDEA (The Power of Closures):
    // Outer function input (factor) becomes FIXED (remembered in memory).
    // Inner function input (num) can be CHANGED on every call.
// ------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------
// Part 4: Case of Returning an Array of Functions
// ------------------------------------------------------------------------------------------------------

function outerArrayFunc() {
    const arr = [];
    for (let i = 0; i < 3; i++) {                       // 'let' is block-scoped, so each func remembers 
        arr.push(function() {                           // its own unique 'i' (0, 1, and 2).
            return i;
        });
    }
    return arr;
}

const arrFuncs = outerArrayFunc();
console.log(arrFuncs[0]);                               // Output: [Function (anonymous)]
console.log(arrFuncs[0]());                             // Output: 0
console.log(arrFuncs[1]());                             // Output: 1
console.log(arrFuncs[2]());                             // Output: 2