// Problem : How to return value from Async Code?
// Solution : 

// 1. We define the Higher-Order Function. It accepts a callback ('callF').
function searchPizza(callF) {
    console.log("Pizza Searching...");

    setTimeout(() => {
        let pizzaPrice = 500;
        // 2. When the data is ready, we trigger the callback and pass the data IN.
        callF(pizzaPrice);
    }, 2000);
}

// 3. We call the function and pass our instructions (the callback) as an argument.
searchPizza(function(price) {
    console.log(`Success! The pizza costs $${price}`);
});
console.log("How it's going..");

// ------------------------------------------------------------------------------------------
// BEHIND THE SCENES
// 1. searchPizza function calling
// 2. console.log(Pizza) runs
// 3. setTimeout goes to Timer for 2s and then holds in Queue
// 4. console.log(How it's going) runs
// 5. setTimeout comes in picture, calling the Callback function -> Success..