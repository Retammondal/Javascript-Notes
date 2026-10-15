
// ------------------------------------------------------------------------------------------------------
// Problem
// ------------------------------------------------------------------------------------------------------
// Callback Hell and the Inversion of Control 
// (handing our function over to another function and losing control)

// SOLUTION --> Promise
// JavaScript Object that represents the eventual completion (or failure) 
// of an asynchronous task and its resulting value...

// ------------------------------------------------------------------------------------------------------
// 3 States of Promise
// ------------------------------------------------------------------------------------------------------
// 1. Pending
// 2. Fullfilled/ Resolved --> resolve()
// 3. Rejected             --> reject()

// ------------------------------------------------------------------------------------------------------
// Syntax : 
// const date = new Date();                     // --> Constructor --Create new Date Object
// const p = new Promise(callbackFunct);        // --> Constructor --Create new Promise Object
// ------------------------------------------------------------------------------------------------------

// The Executor function takes two built-in functions as arguments: resolve and reject
const myPromise = new Promise(function(resolve, reject) {
    // We do some task here...{Pending}

    console.log("Inside Promise");

    // If successful, we call resolve() and pass the result
    resolve("Pizza is ready!");             // {Fullfilled}        
    
    // If it fails, we call reject() and pass an error message
    reject("Oven broke down!");             // {Rejected}

    // Once Settles (Fullfilled/ reject), lower things will not work
    resolve("Pizza is ready!");             // {Fullfilled}        
});

console.log("Outside Promise");
console.log(myPromise);                     // Promise { 'Pizza is ready!' } 



// Print : Inside -> Outside
// WHY? - Creating a Promise is synchronous, The Work inside it can be asynchronous
// Callback Function is Synchronous Callback Function


// ------------------------------------------------------------------------------------------------------
// Directly Promise Writing
// ------------------------------------------------------------------------------------------------------

Promise(function(resolve, reject){
    resolve("Ready");
})