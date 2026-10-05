// ------------------------------------------------------------------------------------------------------
// Part 6: Execution Context Isolation
// ------------------------------------------------------------------------------------------------------
// Every time you call a function, it gets a brand new Execution Context with fresh memory.

function counter(){
    let count = 0;                              // Created fresh each time
    count = count + 1;
    console.log(count);
}

counter();                                      // Output: 1 
counter();                                      // Output: 1 (Independent calls; they don't share memory)

let sharedCount = 0;                            // To share state, move the variable to the Global Scope
function counter1(){
    sharedCount = sharedCount + 1;
    console.log(sharedCount);
}

counter1();                                     // Output: 1
counter1();                                     // Output: 2


// ------------------------------------------------------------------------------------------------------
// Part 7: The Call Stack
// ------------------------------------------------------------------------------------------------------
// Operates on LIFO (Last In, First Out). Tracks all execution contexts.

function innerStack() {
    console.log("Inner executed");
}

function outerStack() {
    console.log("Outer executed");
    innerStack();                               // Pushes innerStack EC on top of outerStack EC
}

outerStack();                                   // Pushes outerStack EC on top of Global EC