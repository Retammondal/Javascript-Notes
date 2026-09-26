// Variable - Storing Data; Function - Doing Work
// Function is a reusable block of code
// DRY (Don't Repeat Yourself) principle

// ---------------------------------------------------------------------------------------------
// Defining and Calling the Function
// ---------------------------------------------------------------------------------------------

function greet(){                                   // Defining
    console.log("Hello Guys! How are you?");
}
greet()                                             //calling
console.log(greet()); 
// Print of greet() function + undefined due to no print by console.log

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Parameter vs Arguement
// ---------------------------------------------------------------------------------------------

function greetUser(name) {                          // 'name' is the Parameter
    console.log("Hello " + name + "!");
}

greetUser("Retam");                                 // "Alice" is the Argument

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Return keyword
// ---------------------------------------------------------------------------------------------
// console.log() just prints text to screen, return give data to program so it can be saved in a variable.

function add(num1, num2) {
    return num1 + num2;
    console.log("This will never print!");      // Unreachable code, after return function closes
}
var1 = add(4,32)
console.log(var1);

