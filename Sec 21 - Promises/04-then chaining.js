let price = 600;

const myPromise = new Promise(function(res, rej){
    if(price >= 500){
        res(`Price Value ${price} is Accepted`)
    } else{
        rej(`Price Value is under 500...Sorry..`)
    }
})

// Consume
myPromise.then(function(value){
    console.log(value);
    return price * 2;               // returns Value
}).then(function(value){
    console.log("Price is double of Previous",value);
    return new Promise(function(res, rej){
        rej("Sorry, again Rejected")
    });
}).then(function(value){
    console.log(value);
    return "This will not Print"
}).then(function(value){
    console.log(value);
}).catch(function(value){
    console.log(value);
})

// To pass data from one .then() to another in a promise chain, 
// you must return a value or a new promise from inside the current .then() callback function

// .catch() takes any of Promise and breaks the chain if got error

console.log();