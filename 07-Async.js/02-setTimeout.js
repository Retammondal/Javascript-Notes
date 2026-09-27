// ------------------------------------------------------------------------------------------------------
// setTimeout(CallbackFunction, delayinMS, arguments...)
// ------------------------------------------------------------------------------------------------------
// sets a timer that executes a function or a specified piece of code once the timer expires
// Async Behaviour --> It doesn't block running code, happens in background

console.log("Part before any SetTimeout Function..");

// Timer 1: 4s delay
setTimeout(() => {
    console.log("Task with 4s Delay");
}, 4000);

// BLOCKING CODE: Freezes the call stack for 2 seconds (2000ms)
let startTime = Date.now();
while (Date.now() - startTime < 2000) {
    // Doing nothing, just blocking the main thread
}

// Timer 2: 1s delay (with arguments)
setTimeout((x, y) => {
    console.log(`${x} it's with ${y}s delay`);
}, 1000, "Retam", 1);

// Timer 3: 2s delay
setTimeout(function() {
    console.log("Task with 2s Delay");
}, 2000);

console.log("Part after any SetTimeout Function..");

// ---------------------------------------------------------
// BEHIND THE SCENES: Event Loop & Execution Timeline
// ---------------------------------------------------------

/*
 * [ T = 0s ]
 * 1. clg("Part before...") runs synchronously in Call Stack.
 * 2. Timer 1 (4s) sent to Web API. Background countdown starts.
 * 
 * [ T = 0s to 2s ] -> THE BLOCKING PHASE
 * 3. `while` loop blocks the main thread (Call Stack) for 2s.
 *    -> Web API keeps counting Timer 1 down in the background.
 * 
 * [ T = 2s ]
 * 4. `while` loop ends. Main thread is free.
 * 5. Timer 2 (1s) sent to Web API. Countdown starts.
 * 6. Timer 3 (2s) sent to Web API. Countdown starts.
 * 7. clg("Part after...") runs. Call Stack is now empty.
 * 
 * [ T = 3s ]
 * 8. Timer 2 finishes (started at 2s + 1s delay).
 *    -> Pushed to Queue -> Call Stack runs: "Retam... 1s delay"
 * 
 * [ T = 4s ]
 * 9. Timer 1 (started at 0s + 4s delay) AND 
 *    Timer 3 (started at 2s + 2s delay) finish simultaneously.
 *    -> Both pushed to Queue -> Call Stack runs them in order:
 *       "Task with 4s Delay" followed by "Task with 2s Delay".
 */