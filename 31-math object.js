// MATH OBJECT -> Return values....use console.log() to print
// built-in properties and methods of the Math object are completely immutable

// Core Constants
// 1. Math.PI
// 2. Math.E
// 3. Math.SQRT2

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

// How it is acting? I am creating an Object name RetamMath
const retamMath = {
    PI : 3.14,
    E : 2.71,
    SQRT2 : 1.414
}
console.log("Return Constants value pi:", retamMath.PI);
console.log("Return Constants value e:", retamMath.E);
console.log("Return Constants value root of 2:", retamMath.SQRT2);

console.log("----------------------------------------------------------");

// Rounding Method
// 1. Math.round(x) -- nearest integer
// 2. Math.ceil(x) -- greatest integer
// 3. Math.floor(x) -- lowest integer
// 3. Math.trunc(x) -- just cut the decimal part

let num1 = 4.4;
let num1Change = Math.round(num1)
console.log("Real Number", num1);

console.log("Rounded Number", num1Change);
// NOTE: Math Object properties not changing the Real variable (Immutable)
console.log("Ceiling of Number", Math.ceil(num1));
console.log("Floor of Number", Math.floor(num1));
console.log("Tranculating of Number", Math.trunc(num1));

console.log("----------------------------------------------------------");

// Arithmetic & Power Methods
console.log("Power of 2^3", Math.pow(2, 3)) 
console.log("Square Root of 64", Math.sqrt(64)) 
console.log("Modulas of -15", Math.abs(-15))  
console.log("Minimum of 5,10,2 :", Math.min(5, 10, 2))  
console.log("Maximum of 5,10,2 :", Math.max(5, 10, 2))  

let num2 = 5;
let num3 = 6;
let num4 = 9;
console.log(`Minimum of`,num1,num2,num3,num4 ,`: ${Math.min(num1,num2,num3,num4)}`);
console.log(`Power of ${num3} ^ ${num4} : ${Math.pow(num3, num4)}`);

console.log("----------------------------------------------------------");

// Generating Random Numbers
// Math.random() --> Output: [0,1)

console.log("Generating Random numbers b/w [0,1)", Math.random());
// as lower variant is 0, we can change only Upper variant by multiply
console.log("Generating Random numbers b/w [0,5)", Math.random()*5);
// if i want to add in both lower and upper variable use addition
console.log("Generating Random numbers b/w [3,8)", (Math.random()*5)+3);

// Example :
// The Range Challenge: How do you get a random whole number strictly between 5 (min) and 15 (max)?
console.log("\nHow to get random Whole no. b/w 5-15?");
let randomInteger = Math.random() // output [0,1)
randomInteger = Math.random()*10 // output [0,10)
randomInteger = Math.floor((Math.random()*10)+5) // output [5,15) but rounding will give [5,14]
randomInteger = Math.floor((Math.random()*11)+5) // output [5,16) but rounding will give [5,15]
// Shortcut : const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
let min = 5;
let max = 15
randomInteger = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomInteger);

