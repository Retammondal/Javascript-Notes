// ---------------------------------------------------------------------------------------------------
// Case of Returning an Object and Calling it...
// ---------------------------------------------------------------------------------------------------

function countingMachine() {
    let count = 0;
    return {
        increment: function(a=1) {
            count += a;
        },
        decrement: function(a=1) {
            count -= a;
        },
        getCount: function(){
            return count;
        }
    };          // Outer func returning an object {increment:func, getcount:func}
}

countingMachine().increment();
countingMachine().increment();
// console.log(countingMachine.getCount());     //❌❌ CountingMachine doesn't have it, countingmachine() had it..
console.log(countingMachine().getCount());      // prints 0
    // why nothing happens? --> Each execution context it will be 0, and if you notice everytime its 
    // running on different Execution context
    // SOlution : store it in a variable to run in single execution context

    const counter1 = countingMachine();
    counter1.increment(3);              // got increment by 3
    counter1.decrement(2);              // got decrement by 2
    console.log(counter1.getCount());   // result 1

    const counter2 = countingMachine();
    counter2.increment(5);
    counter2.increment();
    counter2.increment(1);
    console.log(counter2.getCount());

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------------
// Case of Returning an Function...
// ---------------------------------------------------------------------------------------------------


function powerOperator(factor){
    return function(num){
                return num ** factor;
            }
    
};
const power2 = powerOperator(2);
const power3 = powerOperator(3);
const power4 = powerOperator(4);

let num = 5;
console.log(power2(5));
console.log(power3(5));
console.log(power4(5));

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------------
// Case of Returning an Object...
// ---------------------------------------------------------------------------------------------------

function mathOperator(factor){
    return {
        Multiply : (num) => num * factor,
        Divide : (num) => num / factor,
        Addition : (num) => num + factor,
        Divide : (num) => num - factor,
    }
}
const factor = mathOperator(4);
factor.Multiply(5);
console.log(factor.Multiply(5));
console.log(factor.Addition(5));

/////////////////////////////////////////
// IMPORTANT IDEA =>
    // Outer function input will be fixed, inner function input can be changed..