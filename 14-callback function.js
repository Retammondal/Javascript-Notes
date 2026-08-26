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
// taking b -> callback and a -> outer function
function b1(num){
    console.log("b1");
    console.log(num);
}
function a1(num, callF){
    console.log("a1");
    console.log(num);
    console.log(callF);
    // will give [Function: b1] as output...
    callF() 
    // as not passed any paramter, parameter print will come undefined
    callF(7)
}

a1(5, b1);
// function c1(num, callF(num)){}
// We can't give like this parameter

console.log("--------------------------------------------------------------------------------------");

// Giving whole function as input/ parameter
function a2(fun){
    console.log("a2");
    console.log(fun);
    fun()
}
a2(
    function callbackFunction() {
        console.log("HEllo!! RETAM");
    }
)
    // ** Function name is b2 will be printed in console.log(fun)
a2(
    function () {
        console.log("Hello!! Sruti..");
    }
)
    // ** Function name will be anonymous as no name given 



console.log("--------------------------------------------------------------------------------------");
// The Callback Function Example
function sendReceipt(email) {
    console.log("Sending receipt email...");
    console.log("To: " + email);
}

// The Outer Function (Handles the core payment logic)
function processPayment(amount,email, statusCallbackF = sendReceipt) {
    console.log("Processing payment...");
    console.log("Amount charged: $" + amount);
    
    // Simulating a successful payment check
    console.log("Payment Successful!");
    
    // Executing the callback function
    statusCallbackF(email); 
}

// Executing the outer function and passing the callback
processPayment(30,"retamm.com", sendReceipt);
console.log("------------------------");
processPayment(49.99,"retammondal2020@gmail.com");

