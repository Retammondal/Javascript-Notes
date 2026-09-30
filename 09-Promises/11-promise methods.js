function fun1(){
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res("Function 1")
        }, 2000)
    })
}
function fun2() {
    return Promise.resolve("Function 2")
}
function fun3() {
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            res("Function 3")
        }, 4000)
    })
}

async function fun4(){
    return "Function 4"
}

function fun5() {
    return Promise.reject("Function 5, Error came")
}

// We have 5 Function which returns a Promise
// ------------------------------------------------------------------------------------------------------
// Promise Combinator Methods
// ------------------------------------------------------------------------------------------------------
// Execute multiple Promises at the same time (in parallel) rather than waiting for them one by one

// Promise.all(....)
// ------------------------------------------------------------------------------------------------------
// Waits for ALL promises to fulfill. If even one rejects, the whole thing rejects instantly

let result = Promise.all([fun1(), fun2(), fun3(), fun4()]);
        // if fun5() include then only rejected output will come
        // if you notice all together will take the longest time (4s)

result.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})

// Promise.allSettled(....)
// ------------------------------------------------------------------------------------------------------
// Waits for all promises to settle (finish), regardless of whether they fulfilled or rejected.

let result2 = Promise.allSettled([fun1(), fun2(), fun3(), fun4(), fun5()]);

result2.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})

// Promise.race(....)
// ------------------------------------------------------------------------------------------------------
// Returns the result of whichever promise finishes FIRST, whether it fulfills or rejects.

let result3 = Promise.race([fun1(), fun2(), fun3(), fun4(), fun5()]);

result3.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})

// Promise.any(....)
// ------------------------------------------------------------------------------------------------------
// Returns the result of the first promise that FULFILLS. It ignores fast rejections and keeps looking for a success.

let result4 = Promise.any([fun1(), fun2(), fun3(), fun4(), fun5()]);

result4.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})