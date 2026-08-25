// Array is a Non-Primitive Data Type
// Zero-based Indexed, Heterogeneous

// An empty array
let emptyArray = [];

// An array containing mixed data types
let fruits = ["Apple", "Banana", 42, true];
console.log(fruits);

// Modifying Item
fruits[1] = "Mango"
console.log(fruits);

// Accessing Item
console.log(fruits[0],fruits[1]);

// out of bound access
console.log(fruits[9]); //output: undefined

//Length Property
console.log(fruits.length);


console.log("--------------------------------------------------------------------------------------");
// 4 Core Method
fruits.push("Hello",56)
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.unshift(
    16,
    "Retam"
)
console.log(fruits);
fruits.shift()
console.log(fruits);
console.log("--------------------------------------------------------------------------------------");

// Searching
console.log(fruits.indexOf("Retam"));
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Ban")); // No findings, return -1
console.log("--------------------------------------------------------------------------------------");

// Negative Indexing
// like python we can't write [-1] like index
// Method 1 : Traditional math
console.log(fruits[fruits.length - 1]); // length will be 6 but last index offered is 5(less by 1)
console.log(fruits[fruits.length - 2]); // getting 2nd last 

// Method 2 : Modern approach using .at() keyword
console.log(fruits.at(-3));
console.log(fruits.at(-4));
console.log("--------------------------------------------------------------------------------------");

// Nested Array
let productsList = [
    ["tshirt", 4999], 
    ["lower", 3999],  
    ["top", 2999]     
];
for(let i = 0; i < productsList.length; i++) {
    // productsList[i] grabs the entire inner array: e.g., ["tshirt", 4999]
    // [0] grabs the first item of that inner array: "tshirt"
    // [1] grabs the second item of that inner array: 4999

    let name = productsList[i][0];
    let price = productsList[i][1];

    console.log(`Product Name is ${name} with price ${price}`);
}

console.log("--------------------------------------------------------------------------------------");
// Type of
console.log(typeof productsList);
console.log(typeof(productsList));
// Both writing style is valid
// Problem : It will return object
// Solution: we have to check it array or not using Array.isarray(x) 
console.log(Array.isArray(productsList)); // return true or false.