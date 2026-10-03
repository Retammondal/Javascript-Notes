// NUMBER BUILT IN OBJECTS

// Constants
// 1. Number.NaN --> "Not-a-Number" value (an undefined result).
console.log(Number.NaN);

console.log("----------------------------------------------------------");

// Number Check --> Returns true or false
// 1. Number.isNaN(x) -- Checks if the value is strictly NaN.
// 2. Number.isFinite(x) -- Checks if the value is a regular, finite number (not Infinity)
// 3. Number.isInteger(x)

let NaNnumber = NaN;
let finiteNumber = 4.56;
let integerNumber = 6;

console.log(`Is ${NaNnumber} is NaN or not? ${Number.isNaN(NaNnumber)}`);
console.log(`Is ${finiteNumber} is NaN or not? ${Number.isNaN(finiteNumber)}`);
console.log(`Is ${finiteNumber} is Finite or not? ${Number.isFinite(finiteNumber)}`);
console.log(`Is ${integerNumber} is Finite or not? ${Number.isFinite(integerNumber)}`);
console.log(`Is ${finiteNumber} is Integer or not? ${Number.isInteger(finiteNumber)}`);
console.log(`Is ${integerNumber} is Integer or not? ${Number.isInteger(integerNumber)}`);

console.log("----------------------------------------------------------");

// Parsing Numbers
// 1. Number.parseInt(string) -- Reads a string and returns a whole integer, chopping off decimals and text.
// 2. Number.parseFloat(string) -- Reads a string and returns a floating-point (decimal) number.

let numtypeString1 = "42.35px";
let numtypeString2 = "abc"; // will return NaN

console.log(`Number Type String ${numtypeString1} conversion to Int : `, Number.parseInt(numtypeString1));
console.log(`Number Type String ${numtypeString1} conversion to Float : `, Number.parseFloat(numtypeString1));
console.log(`Number Type String ${numtypeString2} conversion to Int : `, Number.parseInt(numtypeString2));
console.log(`Number Type String ${numtypeString2} conversion to Float : `, Number.parseFloat(numtypeString2));

console.log("----------------------------------------------------------");

// Formatting Numbers ==> INSTANCE METHOD
// 1. toFixed(x) -- Formats a number using fixed-point decimal notation.
// 2. toPrecision(x) -- Formats a number to a specific total length of significant digits.
// 3. toString(x) -- Converts a number to a string using a specified base (e.g., base 2 for binary).

// NOTE : In both toFixed, toPrecision -- rounding happens automatically

let num1 = 4.5698;
console.log(`Wanting fixed decimal of 2 from ${num1} : `, num1.toFixed(2));
console.log(`Wanting Total Length of 2 from ${num1} : `, num1.toPrecision(2));

let num2 = 5.35;
console.log(`Wanting String from ${num2} : `, num2.toString());
console.log(`Wanting Type String of 2 from ${num2} : `, num2.toString(3));

// NOTE : toFixed, toPrecision Returns as a string
console.log(typeof(num1.toFixed(2)));
console.log(typeof(num1.toString(2)));

console.log("----------------------------------------------------------");

// HACK --> Parsing Number Hack
// parseInt, parseFloat works without Number Object also... -> Works only for these 2
console.log(`Number Type String ${numtypeString1} conversion to Int : `, parseInt(numtypeString1));
console.log(`Number Type String ${numtypeString1} conversion to Float : `, parseFloat(numtypeString1));
