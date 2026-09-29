const myPromise = new Promise(function(resolve, reject) {       // resolve , reject --> Functions
    resolve("Hi Hello");
    reject("Server Down Hain beta..")
})

// ------------------------------------------------------------------------------------------------------
// Consume Promises
// ------------------------------------------------------------------------------------------------------
// After Promise creation we need to pull out data using built in Methods (.then,.catch,.finally)
// Methods are = Asyn Task + Microtask Queue + Return a Promise (Useful for Chaining)

// 1. .then(onFulfilled, onRejected)  Used to handle a successful result.
// 2. .catch(onRejected) Used to handle errors.
// 3. .finally(callback) Executes no matter what (whether fulfilled or rejected). 

// ------------------------------------------------------------------------------------------------------

const respond = myPromise.then(function onFulfilled(value){
    console.log("Result :", value);
}, function onRejected(value) {
    console.log("Result :", value);
})

// If reject works, onRejected function will work
// If resolve works, onFulfilled function will work

// NOTE : respond is Consume of myPromise --> it itself is also a Promise

console.log(myPromise);             // Promise { <rejected> 'Server Down Hain beta..' }
console.log("Respond Promise (Consume Promise)", respond);          // Pending

console.log("----------------------------------------------------------");

// ------------------------------------------------------------------------------------------------------
// catch and finally
// ------------------------------------------------------------------------------------------------------

const promise = new Promise(function( Undefined, rej){
    rej("Server Failed..")
})
promise.then(function(value){           // Works on resolve; value = resolve's value
    console.log(value);       
}).catch(function(value){               // Works on Reject; value = reject's value
    console.log("Sorry,", value);
}).finally(function(){                  // Works always success/ failed
    console.log("Process Done Finally..");
})
console.log(promise);