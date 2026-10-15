// ------------------------------------------------------------------------------------------------------
// setInterval(CallbackFunction, intervalinMS, arguments...)
// ------------------------------------------------------------------------------------------------------
// A Web API timer that repeatedly executes a function at fixed time intervals.


console.log("Upper Portion");

let count = 1;
let loop = setInterval(function(){
    console.log("Hi");

    if (count >= 5){
        clearInterval(loop);
    }
    count++;
}, 1000)
// will keep on running again and again after 1000 ms

console.log("Lower Portion");       
// If we notice both will run and at last setInterval will happen

// Clear/ Delete the setInterval
// clearInterval(loop)   // If we give outside it will never run as delete immediately


// Running Interval Infinite Times
// Logs "Tick..." to the console every 1000ms
setInterval(() => {
  console.log("Tick...");
}, 1000);