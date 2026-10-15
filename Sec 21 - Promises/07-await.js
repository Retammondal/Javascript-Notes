// await --> How to call a async Function
// Do Normally passing in clg work? No!!

async function mainFunc(){
    return "This is an Async Function"
}

console.log(mainFunc());                        // Promise { 'Value...' }

mainFunc().then((data)=>{console.log(data);})     // Correct Method...

// You can ONLY use the await keyword inside an async function! 

async function callingFunc() {
    mainFunc().then(data => {console.log(data);})   

    let data = await mainFunc();
    console.log(data);                         
}

callingFunc();                                

// By Running in CallingFunc() --> I will get the Async Function Promise Return value..(Without using then)