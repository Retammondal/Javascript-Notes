// ------------------------------------------------------------------------------------------------------
// CallBack Function
// ------------------------------------------------------------------------------------------------------
// Function which passed as Argument to another Function

function callF(){
    console.log("This is Callback Function");
}
function outer(inner){
    console.log("Hii");
    inner()
}

outer(callF);

// ------------------------------------------------------------------------------------------------------
// High Order Function
// ------------------------------------------------------------------------------------------------------
// Follow any one of these...
// 1. Takes another function as an argument.
// 2. Returns a function as its result.

function a(){
    function b(){

    }
    return b
}

// ------------------------------------------------------------------------------------------------------
// Async Function return Problem
// ------------------------------------------------------------------------------------------------------
// Dealing with async code, return completely Fails..


function searchPizza(){
    console.log("Pizza Searching....");
    setTimeout(() => {
        console.log("Here is the Pizza's Menu.");
        return 500;
    }, 2000);
}

let output = searchPizza()
console.log(output);                // Undefined // WHY? b/c it runs first before setTimeout

// So How to receive the Return
// This is a Async task we can't handle async task in sync way..

// Solution : Asynchronous Callbacks...

