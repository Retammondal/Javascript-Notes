// Variable - Storing Data; Function - Doing Work
// Function is a reusable block of code
// DRY (Don't Repeat Yourself) principle

// Defining and Calling the Function
function greet(){  // Defining
    console.log("Hello Guys! How are you?");
}
greet() //calling
console.log(greet()); 
// Print of greet() function + undefined due to no print by console.log

console.log("--------------------------------------------------------------------------------------");
// Parameter vs Arguement
    // 'name' is the Parameter
function greetUser(name) {
    console.log("Hello " + name + "!");
}

    // "Alice" is the Argument
greetUser("Retam"); // Output: Hello Alice!

// Default parameter
function greetUser2(name,age,current_year=2026){
    console.log(
        `Hello, ${name}, your age is ${age}Y w.r.t. ${current_year}`
    );
}
greetUser2("Retam",16,2025)
greetUser2("Retam",16) // By default current year will take 2026
greetUser2("Retam") // age will come undefined
// *** Here the concept of named arguement is not present like python, 
// we have to follow orders (age=16,name="Retam") -- NO!
// That's why always write default parameter at end during creation..


greetUser2("Anuska",18,undefined); // Default only trigger for entirely missing or, undefined
greetUser2("Anuska",18,null); // Default will not trigger for null,0 or, ""
greetUser2("Anuska",18,""); // Default will not trigger for null,0 or, ""
console.log("--------------------------------------------------------------------------------------");

// return keyword
// console.log() just prints text to screen, return give data to program so it can be saved in a variable.
function add(num1, num2) {
    return num1 + num2;
    console.log("This will never print!"); // Unreachable code, after return function closes
}
var1 = add(4,32)
console.log(var1);
console.log("--------------------------------------------------------------------------------------");


// Function Declaration vs Function Expressioon 
// -> Same thing just writing syntax different
// -> Function declaration (hoisted), Function expression is like treating a function like a variable
console.log(mult(5,8,9));
// console.log(mult2(5,8,9)); // This will not work...

function mult(num1,num2,num3){
    return num1*num2*num3;
}
// proper function -> JS engine will by default keep it to top; to access from anywhere of the document

const mult2 = function(num1,num2,num3){
    return num1*num2*num3;    
}
// Only accessable below this line
console.log(mult(4,5,6));
console.log(mult2(10,8,5)); 
console.log("--------------------------------------------------------------------------------------");

// Arrow Function -> Concise , modern syntax of a Function
// It's a type of Function Expression

// Basic Syntax
const greetUser3 = () =>{
    console.log("Hello Guys! How are you??");
}
const greetUser4 = (urName,year=2026) =>{
    console.log(`Hello ${urName}, Current Running year is ${year}`);
} 
const div1 =(num1,num2) => { return num1/num2}

greetUser3()
greetUser4("Retam")
console.log(div1(8,2));

// Arrow Function Syntax Variation
// 1. Implicit Return -> for single expression {} and return can be omitted
const div2 =(num1,num2) => num1/num2;
// 2. Single Parameter -> No Parenthesssis needed
const sqt = num => num*num;
// 3. No Parameter -> () Parenthesis must
const greetuser5 = () => console.log("Hello!");

console.log(div2(9,3));
console.log(sqt(5));
greetuser5()