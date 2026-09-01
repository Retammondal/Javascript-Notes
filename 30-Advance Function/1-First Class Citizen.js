
// ==========================================================
// Function is a First Class Citizen ~ any other value (number, string)
// ==========================================================

function addNum(a,b){
    return a+b;
}

// ----------------------------------------------------------
// 1. Assign Function to Variables
// ----------------------------------------------------------
// We can assign a function reference to a variable, 
// just like you would with a number or string.

const addNumRef = addNum;
// const addNumRef = addNum(); --> It will return the function value not the function itself...
console.log("\n--- 1. Assigned a Func. to a Variable ---");
console.log(`Function addNum :`,addNum,`\n=`,`Function addNumRef :`,addNumRef);
console.log(addNum(5,7));
console.log(addNumRef(5,7));

// ----------------------------------------------------------
// 2. Pass as Arguement to another function
// ----------------------------------------------------------
// You can pass a function into another function as a parameter.

let num1 = 5;
let num2 = 7;
let num3 = 9;

console.log("--- 2. Passing to another Function as a Parameter ---");
const addall = addNum(addNum(num1,num2),num3);
console.log(addall);

// ----------------------------------------------------------
// 3. RETURNING FUNCTIONS FROM OTHER FUNCTIONS
// ----------------------------------------------------------
// A function can produce and return a brand-new function.
// Return from other function

function createMultiplier(multiplier){
    function number(num){
        return num*multiplier;
    }
    return number;
}
console.log("\n--- 3. Returning from Functions ---");
const multiplierTwo = createMultiplier(2);
const multiplierThree = createMultiplier(3);
console.log(multiplierTwo(5));
console.log(multiplierThree(5));
