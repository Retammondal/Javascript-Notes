// ---------------------------------------------------------------------------------------------
// Callback Function
// ---------------------------------------------------------------------------------------------
// Callback Function -> just a function that you pass into another function as an argument. 
// Outer Function -- Higher order function
// Inner Function -- Callback Function
function a(num){
    console.log("a");
    console.log(num);
}
function b(num){
    console.log("b");
    console.log(num);
}
a(3);
b(5);
console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Calling Callback Function as Parameter
// ---------------------------------------------------------------------------------------------

// taking b -> callback(inner) and a -> outer function(outer)
function inner(num){
    console.log("Inner/ Callback Function");
    console.log(num);
}
function outer(num, callF){
    console.log("Outer Function holding Callback Function");
    console.log(num);
    console.log(callF);         // will give [Function: b1] as output...
    callF(7)
}

outer(5, inner);
// *** Note : 
    // function outer(num, callF(num)){}
    // We can't give like this parameter

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Giving Whole Function as Input/ Parameter
// ---------------------------------------------------------------------------------------------
function outerFunc(callbackFunc){
    console.log("Outer Function Result");
    callbackFunc()
}

outerFunc(
    function callbackFunction() {           // Passing Named Function as Parameter
        console.log("HEllo!! RETAM");
    }
)
outerFunc(
    function () {                           // Passing Anonymous Function as Parameter
        console.log("Hello!! Sruti..");
    }
)

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Example...
// ---------------------------------------------------------------------------------------------

function sendReceipt(email) {
    console.log("Sending receipt email...");
    console.log("To: " + email);
}

// The Outer Function (Handles the core payment logic)
function processPayment(amount,customerEmail, statusCallbackF = sendReceipt) {
    console.log("Processing payment...");
    console.log("Amount charged: $" + amount);
    
    console.log("Payment Successful!");             // Simulating a successful payment check
    
    statusCallbackF(customerEmail);                 // Executing the callback function
}

// Executing the outer function and passing the callback
processPayment(30,"retamm.com", sendReceipt);
console.log("------------------------");
processPayment(49.99,"retammondal2020@gmail.com");

