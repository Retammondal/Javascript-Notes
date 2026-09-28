// ------------------------------------------------------------------------------
// Destructuring of Array
// ------------------------------------------------------------------------------
// Unpack values from Array into Distinct Variables

const colors = ["red", "green", "blue"];
const [first, second, third, fourth] = colors;

console.log(first);         // "red"
console.log(second);        // "green"
console.log(third);         // "blue"
console.log(fourth);        // Undefined -- as no value present

// ------------------------------------------------------------------------------
// Skipping Values
// ------------------------------------------------------------------------------

const [color1,,color3] = colors;
console.log(color1);        // red
console.log(color3);        // blue

// ------------------------------------------------------------------------------
// Default Values
// ------------------------------------------------------------------------------
// Set fallback values if an array index is undefined or missing

const [a = 5, b = 10] = [1];
console.log(a); // 1
console.log(b); // 10

// ------------------------------------------------------------------------------
// Swapping Variables
// ------------------------------------------------------------------------------
// Swap two variable values easily without a temporary variable

let x = 3;
let y = 4;
[x,y] = [y,x]

console.log(x);     // 4
console.log(y);     // 3