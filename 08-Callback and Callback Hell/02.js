function searchPizza(onSearchComplete) {
    console.log("Pizza Searching....");
    setTimeout(function handleSearchTimeout() {
        console.log("Here is the Pizza's Menu.");
        let pizzaPrice = 500;
        onSearchComplete(pizzaPrice);
        console.log("Done");
    }, 2000);
}

function addToCart(onCartComplete) {
    console.log("Pizza adding to cart...");
    setTimeout(function handleCartTimeout() {
        console.log("Pizza Added to Cart");
        onCartComplete();
    }, 3000);
}

function payment(price) {
    console.log("Payment Initiated", `Amount : ${price}`);
    setTimeout(function handlePaymentTimeout() {
        console.log(`Payment Completed of ${price} Rupees`);
    }, 5000);
}

// Executing the chain with named functions
searchPizza(function processSearchResults(price) {
    addToCart(function processCartResults() {
        payment(price);
    });
});

