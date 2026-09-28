// In Sync Way code is running one after one line by line
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// ------------------------------------------------------------------------------------------------------
// Sync Code Blocking Problem
// ------------------------------------------------------------------------------------------------------
// Problem -> Blocking. A single line of Blocking code can freeze whole code..

let startTime = Date.now()              // Current unix timestampt in milisecond; 1s = 1000 ms
                                        // StartTime is fixed that time as taken in variable

while(Date.now() - startTime < 5000){          // 5000 ms = 5s

}
    // when we run this code startTime will be fixed but Date.now() will keep on running 
    // and that's why it will keep on running for 5s

console.log("It will print after 5s = 5000ms");

// What actually happens ? --> Previous while loop stops this code for 5s to progress

// ------------------------------------------------------------------------------------------------------
// Solution --> Async Code
// ------------------------------------------------------------------------------------------------------
// JS relies on its runtime environment (the Browser or Node.js) to handle heavy tasks asynchronously
// Async Code - Code runs in Background and Main programme keeps on running

// ------------------------------------------------------------------------------------------------------
// Web API's
// ------------------------------------------------------------------------------------------------------
// Built in functionality provided by Web Browser ; not a part of JS language
// Browser = JS engine (runs the JS code blocks) + Web API