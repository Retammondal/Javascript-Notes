// scope -- accessing of any function/object/variable
// 1. Global Scope 
// variable globally accessible
let userName = "Retam";

console.log("--------------------------------------------------------------------------------------");

// 2. Block Scope

    // Block => {....Code of Block.....}
    if(true)
        console.log("Hello");
    // this is also true and for one line no need to give block {}; 
    // but for multiple line we must have to give 
    if(true) {
        console.log("hello");
        console.log("hello2");
    }
    // Example
    if (3>4)
        console.log("This will not print as condition not satisfy of if");  
        console.log("It will print b/c not depend on if block");

// 2. Block Scope -> if given variable initialize inside block ; it will stays inside only
let nameP1 = "Retam Mondal"; // Global
{
    let nameP2 = "Rishob Mondal";
    console.log(nameP2); // nameP2 is accessable inside block
    console.log(nameP1); // namep1 accessable everywhere
    {
        console.log(nameP2); // here namep2 accessable b/c inside main block
    }
}
// console.log(nameP2); // this will not work , will give not defined

// example of Block variable
// for (){............}
// if(true){.........}

console.log("--------------------------------------------------------------------------------------");

// 3. Function Scope -> given variable initialize within function; it will stay inside only
function hello(){
    let nameP3 = "Anushka Mondal";
    console.log(nameP3); // namep3 is accessable obviously
}
// console.log(nameP3); // will give not defined
hello()

console.log("--------------------------------------------------------------------------------------");

// Var Property -> This is a Global Variable by default it doesn't care about block scope
// it will accessable everywhere
{
    var nameP4 = "Rishita Mondal"
    console.log(nameP4);
}
console.log(nameP4);
// Var Property -> Global varible for block scope but not for Function scope
function hello2(){
    var nameP5 = "Aadrika Mondal"
    console.log(nameP5);
}
// console.log(nameP5); // will not work
hello2()

// Trick: If you notice Function Scope is also a type of Block scope then why need to define separately
// due to this var property var will work outside also in block scope but not in function scope

console.log("--------------------------------------------------------------------------------------");
// Variable 
// we generally use const mostly
// var - function scope
// let, const - block + function scope

console.log("--------------------------------------------------------------------------------------");
// Execution Context Isolation (The Counter Example)
function counter(){
    let count = 0;
    count = count + 1;
    console.log(count);
}

counter()
counter() // both will output 1
// they both are independent function invoke/ call; they dont know which performed first

let count = 0;
function counter1(){
    count = count + 1;
    console.log(count);
}

counter1() // This will output 1
counter1() // This willl output 2
counter1() // This willl output 3

console.log("----------------------------------------------------------");

console.log('\nVar Scope Rule');
let x = 10;
{
    let x = 20; // ◀ This stays locked inside this block!
}
console.log(x); // Output: 10

var y = 10;
{ 
    var y = 20; // Becomes Global
}
console.log(y); // Output : 20
// The curly braces {} create a block scope, 
// but var completely ignores them. 
// It treats the var x = 20; inside the block as if it were written out in the open global scope.
