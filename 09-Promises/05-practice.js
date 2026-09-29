
// How to Solve Callback Hell??
// Solving the Previous Problem...

// Searching, Addto Cart, Payment all are Async tasks...all will take some time in background to complete

function searchPizza() {
    const p = new Promise(function(resolve, reject){
        console.log("Searching Pizza from the Menu...");
        setTimeout(function handleSearchTimeout() {
            console.log("Here is the Pizza's Menu.");
            let pizzaPrice = 500;
            resolve(pizzaPrice);
            resolve(pizzaPrice);        // Solve the Problem of Inversion of control, 
                                        // By giving multiple it will not print multiple
        }, 2000);       
    })
    return p;
}

function addToCart(value) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Pizza adding to cart...");
        }, 1000)
        setTimeout(function handleCartTimeout() {
            console.log("Pizza Added to Cart");         // print after 2s not 3s
            resolve(value);
        }, 3000);
    })
}

function payment(value) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Payment Initiated", `Amount : ${value}`);
        }, 1000)
        setTimeout(function handlePaymentTimeout() {
            let isPaymentSuccess = true;

            if (isPaymentSuccess){
                resolve(`Payment Completed of ${value} Rupees`)
            }else{
                reject("Bhaiya Payment Failed")
            }
        }, 3000);
    })
}

// Executing the chain with named functions
// searchPizza();
searchPizza()
    .then(function(price) {
        return addToCart(price); // Returns a promise, chain waits
    })
    .then(function(price) {
        return payment(price);   // FIXED: Return the promise, chain waits
    })
    .then(function(paymentMessage) {
        // Now this waits for payment to finish!
        console.log(paymentMessage); // Logs: "Payment Completed of 500 Rupees"
        setTimeout(function(){
            console.log("Bss Aaa hee gaya Pizza..");
        }, 2000)
    })
    .catch(function(error) {
        // If payment fails, it skips to here
        console.log(error); 
    });

