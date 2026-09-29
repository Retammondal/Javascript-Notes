console.log("a"); 

const p2 = new Promise(function f1(resolve, reject) {       // Promise creation
    console.log("b"); 
    resolve("hello");                   // Promise is fulfilled!
});

setTimeout(function timeoutCb() {       // Async Code (Callback Queue)
    console.log("SetTimeout");
}, 2000);

p2.then(function f2(val) {              // Attaching consumers
    console.log("then");
    console.log(val);
}).catch(function catchCb() {
    console.log("catch");
}).finally(function f4() {
    console.log("finally");
});

console.log("c"); 

/* 
 =========================================
 EXECUTION TRACE (Microtask vs Macrotask)
 =========================================
 
 1. Call Stack (Synchronous): 
    Executes line-by-line first. Logs 'a', 'b' (Promise executors run synchronously), and 'c'.
 
 2. Web API Handoff: 
    The setTimeout is sent to the browser's background APIs to wait for 2 seconds. 
 
 3. Microtask Queue (High Priority Async): 
    Once the call stack is empty, the Event Loop processes microtasks. 
    It executes the resolved .then (logging 'then' and 'hello'). 
    This triggers .finally to queue and execute (logging 'finally').
 
 4. Macrotask Queue (Low Priority Async): 
    After the 2-second timer finishes, the setTimeout callback is pushed to the 
    Macrotask queue and executed last, logging 'SetTimeout'.

 =========================================
 FINAL OUTPUT ORDER:
 a -> b -> c -> then -> hello -> finally -> SetTimeout
 =========================================
 */