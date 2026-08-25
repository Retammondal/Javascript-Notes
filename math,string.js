// Create a function to make negative number to positive 
function signChange(number){
    // return -(number)
    return number * -1
};
console.log(signChange(-56));
// Custom Implementations

let positiveNum = Math.abs(-56)
console.log(positiveNum);
// Built-in implementation


console.log(Math.round(5.677));
console.log(Math.random()*10);
console.log(Math.round(Math.random()*10));
console.log(Math.random() + 3);
console.log(Math.random() * (8-3) + 3);
console.log(Math.round(Math.random() * (8-3) + 3));


let num1 = "45"
let num2 = "55"
console.log(num1 + num2);
console.log(parseInt(num1) + parseInt(num2));

let num3 = 423.3556
console.log(num3.toFixed(2));

console.log(Number.isNaN(NaN));          // true
console.log(Number.isNaN("hello"));      // false (strict check)
console.log(Number.isFinite(100));        // true
console.log(Number.isFinite(Infinity));   // false
console.log(Number.isInteger(4.5));       // false

console.log(Number.parseInt("45"));
console.log(parseInt("45"));
// console.log(Number.isInteger(4.5));
// console.log(isInteger(4.5));

let email = "example@email.com"
console.log(email.includes("@") && email.includes("."));

const now = new Date();
console.log(now);
console.log(now.getFullYear());

console.log(Math.PI);