// How await Works: Pausing vs. Blocking
// 1. Pauses this function's execution when it got await...
// 2. Gives back control to Global Execution Context so the main script can finish.
// 3. On Promise resolution, remaining code moves to Microtask Queue.
// 4. Event Loop runs it once the Call Stack is empty.


async function fun3(){
    return "Hii";
}

function fun4(){
    return Promise.resolve("Hello");
}

console.log("1");

async function fun5() {
    console.log("2");

    let data = await fun3();    // ⏸️ locally pauses fun5 here!

    console.log("3");
    let data2 = await fun4();   // ⏸️ locally pauses fun5 again!
    console.log("4");

    console.log(data, data2);
}

console.log("Retam");
fun5();
console.log("5");

/*
 =========================================
 EXECUTION TRACE (Microtask vs Macrotask)
 =========================================
 1. Sync: Prints "1" -> "Retam".
 2. fun5() runs: Prints "2".
 3. await fun3(): fun5 pauses; control yields.
 4. Global finishes: Prints "5".
 5. Microtask 1: fun5 resumes; prints "3".
 6. await fun4(): fun5 pauses again.
 7. Microtask 2: fun5 resumes; prints "4" -> "Hii Hello".
 Output: 1 -> Retam -> 2 -> 5 -> 3 -> 4 -> Hii Hello

*/
