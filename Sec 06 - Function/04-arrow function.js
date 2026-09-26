// ---------------------------------------------------------------------------------------------
// Arrow Function
// ---------------------------------------------------------------------------------------------
// Arrow Function -> Concise , modern syntax of a Function
// It's a type of Function Expression --> Not Hoisted

// Basic Syntax
const greetUser1 = () =>{
    console.log("Hello Guys! How are you??");
}
const greetUser2 = (urName,year=2026) =>{
    console.log(`Hello ${urName}, Current Running year is ${year}`);
} 

console.log(greetUser1);        // [Function: greetUser1]

greetUser1()
greetUser2("Retam")

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Arrow Function Syntax Variation
// ---------------------------------------------------------------------------------------------

// 1. Implicit Return -> for single expression {} and return can be omitted
const div =(num1,num2) => num1/num2;
// 2. Single Parameter -> No Parenthesssis needed
const sqt = num => num*num;
// 3. No Parameter -> () Parenthesis must
const greetuser3 = () => console.log("Hello!");

console.log(div(9,3));
console.log(sqt(5));
greetuser3()