// ------------------------------------------------------------------------------------------------------
// Part 4: Independent Execution Contexts (Memory & Heap)
// ------------------------------------------------------------------------------------------------------
// Every time you call the outer function, a brand-new Context is created with unique memory addresses.

function outter() {
    let count = 0;                              // Created fresh each time outter() is called
    return function counter() {
        count = count + 1;
        console.log(count);
    };
}

const counter1 = outter();                      // Context A: new closure tied to Memory Address 0x111
const counter2 = outter();                      // Context B: new closure tied to Memory Address 0x222

counter1();                                     // Output: 1 (Looks in 0x111 backpack, updates to 1)
counter2();                                     // Output: 1 (Looks in 0x222 backpack, updates to 1)
counter1();                                     // Output: 2 (Re-opens 0x111 backpack, updates to 2)
counter2();                                     // Output: 2 (Re-opens 0x222 backpack, updates to 2)


// ------------------------------------------------------------------------------------------------------
// Part 5: How Closures Work with the Call Stack (outer()() Flow)
// ------------------------------------------------------------------------------------------------------

outter()();                                     // Output: 1
outter()();                                     // Output: 1
outter()();                                     // Output: 1

// Why does this always output 1? Memory Flow:
// 1. outter() called -> Execution Context pushed. 'count=0' created. 
// 2. Returns inner function, closure is formed. outter() finishes and pops off stack.
// 3. The second () immediately calls the inner function.
// 4. inner() increments count to 1 and logs it.
// 5. inner() finishes. Because the returned function wasn't saved to a variable, 
//    the closure and reference are immediately destroyed by the garbage collector!
// 6. Every line repeats this exact process with a completely fresh state.