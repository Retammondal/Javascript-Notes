function outer(){
    const a = 5;
    function inner(){
        console.log(a);
    }

    return inner;
}
const response = outer();
console.log(outer); // [Function: Outer]
console.log(response); // [Function: Inner]
console.log(response()); //5, undefined

console.log("----------------------------------------------------------");

function outer2(){
    const a = 5;
    function inner(){
        console.log(a);
    }

    return inner(); // it will execute and return the value given by inner function
    // return inner; // it will return directly function 
}
const response2 = outer2();
console.log(response2); // 5, undefined
// console.log(response2()); // Error, not a function, how to call

console.log("----------------------------------------------------------");

function outter(){
    let count = 0;
    function counter(){
        count = count + 1;
        console.log(count);
    }
    return counter
}

const counter = outter()
counter()
counter()
// if inner function dont get actual value and get refernce of parent variables then how its changing


const counter1 = outter();
const counter2 = outter();
counter1();
counter2();
// Different execution context

outter()(); // 1
outter()(); // 1
outter()(); // 1