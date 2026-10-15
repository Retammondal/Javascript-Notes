// ------------------------------------------------------------------------------------------------------
// setInterval(CallbackFunction, intervalinMS, arguments...)
// ------------------------------------------------------------------------------------------------------
// A Web API timer that repeatedly executes a function at fixed time intervals.


console.log("Upper Portion");

    // Infinite Running at interval of 1000ms = 1s
let count = 1;
setInterval(function(x){

    console.log(`Hey, ${x}, It's Count No. - ${count}`);
    count++;
}, 1000, "Retam")


console.log("Lower Portion");       
