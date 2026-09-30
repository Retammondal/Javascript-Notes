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

let result = Promise.all([fun1(), fun2(), fun3(), fun4()]);
// if fun5() include then only rejected output will come

// all needed when all things to run paralleley and needed together; 
// if anyone got error allTotal will give error

// if you notice all together will take the longest time (4s)

result.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})

let result2 = Promise.allSettled([fun1(), fun2(), fun3(), fun4(), fun5()]);

result2.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})

let result3 = Promise.race([fun1(), fun2(), fun3(), fun4(), fun5()]);

result3.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})

let result4 = Promise.any([fun1(), fun2(), fun3(), fun4(), fun5()]);

result4.then(data=>{
    console.log(data);
}).catch(data=>{console.log(data);})