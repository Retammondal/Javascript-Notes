
// Searching, Addto Cart, Payment all are Async tasks...all will take some time in background to complete

function searchPizza(onSearchComplete) {
    console.log("Pizza Searching....");
    setTimeout(function handleSearchTimeout() {
        console.log("Here is the Pizza's Menu.");
        let pizzaPrice = 500;
        onSearchComplete(pizzaPrice);
    }, 2000);
}

function addToCart(onCartComplete) {
    console.log("Pizza adding to cart...");
    setTimeout(function handleCartTimeout() {
        console.log("Pizza Added to Cart");
        onCartComplete();
    }, 3000);
}

function payment(price, onPaymentComplete) {
    console.log("Payment Initiated", `Amount : ${price}`);
    setTimeout(function handlePaymentTimeout() {
        console.log(`Payment Completed of ${price} Rupees`);
        onPaymentComplete();
    }, 5000);
}

// Executing the chain with named functions
searchPizza(function processSearchResults(price) {
    addToCart(function processCartResults() {
        payment(price, function processPaymentResults() {
            console.log("Pizza on the Way...");
        });
    });
});

// This last one Callback is called --> Callback Hell

// Inversion of Control
// searchPizza got control of addtocart and addtocart get control of payment function call
// Why to give control to other? how to solve the problem --> By Promise will study later on..

