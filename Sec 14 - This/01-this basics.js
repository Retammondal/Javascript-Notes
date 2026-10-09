console.log("----------------------------1------------------------------");
// ------------------------------------------------------------------------------------------------------
// Part 1: Lexical Scope vs Object Context ('name' vs 'this.name')
// ------------------------------------------------------------------------------------------------------
// Regular Functions: Whenever a method is called, the object on the left side of the dot (.) 
// becomes the 'this' object.

let name = "Retam";                                 // Global variable

let student = {
    name: "Nishant",                                // Object property
    printName: function() {
        // If we just use 'name', Lexical Scope kicks in. Objects DO NOT create scope!
        // It skips the object entirely, goes to the global scope, and finds "Retam". 
        // (If global 'name' didn't exist, it would throw a ReferenceError).
        console.log(`My Name is ${name}`);          // Output: "My Name is Retam"
        
        // To access the object's property, we MUST use 'this'.
        console.log(this);                      
        console.log(`My Name is ${this.name}`);    
    }
};
student.printName();                                // printName 'this' --> 'student' object
// this.name = "Nishant"

console.log("----------------------------2------------------------------");

// ------------------------------------------------------------------------------------------------------
// Part 2: The "Same Reference, Different Context" Mystery
// ------------------------------------------------------------------------------------------------------
// Function Scope -> Depends on WHERE it is written (Lexical).
// 'this' Keyword -> Depends entirely on HOW it is called (Dynamic).

let result = student.printName;                     // We copy the function REFERENCE, not the object link.

// QUESTION: "But why? They both are actually same Reference"
// ANSWER: Because 'this' is assigned at the exact moment of execution (the Call Site). 
// It looks to the left of the dot (.) at the moment the function is fired.

result();                                           // 1. Bare Invocation (No dot)
                                                    // It was called without an object prefix. 
                                                    // 'this' defaults to Global Object (or undefined).
                                                    // Output: undefined

student.printName();                                // 2. Method Invocation (Has dot)
                                                    // The engine sees 'student.' and assigns it to 'this'.
                                                    // Output: "Nishant"