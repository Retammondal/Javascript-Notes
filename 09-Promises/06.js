
function fun1(){
    console.log("Function 1");
    return "Fun1"
}

async function fun2(){
    console.log("Function 2");
    return "Async Function"
}

fun2()      // Function 2
fun1()      // Function 1

console.log("----------------------------------------------------------");
console.log(fun1());
console.log(fun2());

// Async Functions always returns a Promise

// If we want async type output from normal function
function fun3(){
    return Promise.resolve("Normal Fun acting like async")
}
console.log(fun3());

console.log("----------------------------------------------------------");
// Consume async function promise obje
fun2().then((val)=>{console.log(val);})
fun3().then((val)=>{console.log(val);})
