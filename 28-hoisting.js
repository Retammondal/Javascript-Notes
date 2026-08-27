// Hoisting
// Variable and Functions declaration goes to top of code
// let, var, const all are hoisted

// console.log(letVar); // will come Error
// console.log(constVar); // will come Error
console.log(varVar); // will come Undefined WHY?

let letVar = "Let Variable";
const constVar = "Const Variable";
var varVar = "var Variable";

// Function Declaration -> Hoisted
addNum()
function addNum(){
    console.log("Function");
}

// Function Expression
// addNum1() // error addnum1 is not a function
var addNum1 =function(){
    console.log("Function Expression given in Var");
}

// addNum2() // Cannot access 'addNum2' before initialization
let addNum2 =function(){
    console.log("Function Expression given in Let");
}


// How is JS code Executed?
// happens in 2 phase
// 1. Creation Phase - Memory allocation
        // variables and function gets memory but ther are undefined till now..no value assigned
        // function copy and paste into memory
// 2. Execution Phase
        // value assigned to variable and functions....
        // value assign, +,-, console.log(), function invoke happens in this phase


// Temporal Dead Zone


// random()

let city = "Delhi";

function printcity(){
    console.log(city);
}

function random(fn){
    let city = "Varanasi";
    fn()
}

random(printcity); // printcity is Callback Function

function random1(){
    let city = "Varanasi";
    function printcity1(){
        console.log(city);
    }
    printcity1();
}

random1(); // printcity is Callback Function