// Give Input --> Function --> Output (return Output)
// If No return explicitly given , by default return undefined
// returned output either store in a variable or directly print
// Print != return

// ----------------------------------------------------------
// 1. Print is not equal to Return
// ----------------------------------------------------------

function addNum(a,b){
    console.log(`Adding two numbers ${a} and ${b}`);
    return a+b
}
console.log("\n--- 1. Directly Calling the Function ---");
addNum(5,6); 
    // By calling print will happen ✅
    // Returned value will not show ❌

console.log("\n--- 2. Printing the Call by the Function ---");
console.log(addNum(6,7));   // --> Directly print the call
    // Prints the inner part ✅
    // prints the return value ✅
console.log(addNum(7,8));

console.log("\n--- 3. Storing the function in var, then print ---");
const store = addNum(4,6);
console.log(store);
console.log(store);

// Can you see something??
// by printing the calling function directly, inner print is repeating every time
// by storing the call in variable, inner print happens once
// then calling the variable will give only returned values


console.log("----------------------------------------------------------");

// ----------------------------------------------------------
// 2. Return anything from a Function
// ----------------------------------------------------------

// ----------------------------------------------------------
// We can return any datatype from a function
// ----------------------------------------------------------
console.log("\n--- 1. Returning Boolean ---");

function check(a){
    if (a>5)
        return true;
    else
        return null;
}
console.log(check(7));
console.log(check(4));

// ----------------------------------------------------------
// We can return a inner function by return fun
// ----------------------------------------------------------

console.log("\n--- 2. Returning Function => Nested Function ---");

function outer() {
    function inner() {
        console.log("Hello from inner!");
    }
    return inner;       // Returns the FUNCTION itself
}

console.log(outer);     // [Function: outer] - it's a function
const result = outer();
console.log(result);    // [Function: inner] - it's a function
result();               // "Hello from inner!" - works!
console.log(result());  // "Hello from inner!" + undefined (Returns nothing the inner function)

console.log("-----------------------");
function outer2() {
    function inner() {
        console.log("Hello from inner!");
        return 42;      // inner returns a value
    }
    return inner;       // Executes inner and returns its result
}

const result2 = outer2();
console.log(result2);   // [Function: inner] - it's a function
result2();              // "Hello from inner!" - works! ✅ but print the returned value ❌ 
console.log(result2()); // "Hello from inner!"✅ + 42, print return value✅

// ----------------------------------------------------------
// return fun != return fun()
// ----------------------------------------------------------

console.log("\n--- 3. Returning Function() => Nested Function ---");

function outer3() {
    function inner() {
        console.log("Hello from inner!");
        return 42;      // inner returns a value
    }
    return inner();     // Executes inner and returns its result
}

const result3 = outer3();   // Output: "Hello from inner!" - inner was executed!
console.log(result3);       // 42 - the RETURN VALUE of inner
// result3();               // ❌ Error: result3 is a number, not a function