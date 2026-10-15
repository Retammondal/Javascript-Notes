console.log("----------------------------1------------------------------");
// ------------------------------------------------------------------------------------------------------
// Understanding Prototypes (The Hidden Magic of JavaScript)
// ------------------------------------------------------------------------------------------------------
// Where do built-in methods come from if we didn't write them? -> Prototypes!

let str = "retam";
str.toUpperCase();          // toUpperCase() is a method. How did it get here?

let user = {
    name: "nishant",
    age: 17
};

console.log(str); 
console.log(user);          // In the browser console, you'll see [[Prototype]] (or __proto__) 
// containing default Object properties.

console.log("----------------------------2------------------------------");

// ------------------------------------------------------------------------------------------------------
// Extending Built-in Prototypes (Adding Custom Methods)
// ------------------------------------------------------------------------------------------------------
let mark = [1, 2, 3];
let mark2 = [5, 6, 8];

// ❌ BAD PRACTICE: Passing the array as an argument (Works, but not how native JS methods work)
Array.prototype.printItemsDemo = function(arr) {    
    for (let i of arr) {
        console.log(i);
    }
};


// ✅ GOOD PRACTICE: Using 'this' keyword to refer to the array calling the method
Array.prototype.printItems = function() {    
    for (let i of this) {                   // 'this' dynamically points to the array calling it
        console.log(i);
    }
};

mark.printItemsDemo(mark);
mark.printItems();                          // 'this' is 'mark'
mark2.printItems();                         // 'this' is 'mark2'


// 💡 Adding custom methods to Strings
String.prototype.message = function() {
    console.log("Hello I have written this:", `${this}`);
};

String.prototype.firstTwoCharacters = function() {
    console.log(this[0] + this[1]);
};

str.message();
str.firstTwoCharacters();

console.log("----------------------------3------------------------------");

// ------------------------------------------------------------------------------------------------------
// The Prototype Chain (Object is the Grandparent)
// ------------------------------------------------------------------------------------------------------
// Method not Present in Object > Search in it's Prototype (Not Found) > Search in Prototype's Prototye
// Chain: Array/String/Number/Function -> Arr/Str/Num/Fun Prototype -> Object Prototype -> null

Object.prototype.allInOne = function() {
    console.log("I am the Best...", `${this}`);
};

// Because Object is at the top of the chain, EVERY data type inherits this method!
({ name: "Retam" }).allInOne();             // Works on Objects
"retam".allInOne();                         // Works on Strings
["hello", "gello"].allInOne();              // Works on Arrays
Number(3).allInOne();                       // Works on Numbers

function random() { return 5; }
random.allInOne();                          // Works on Functions

console.log("----------------------------4------------------------------");
// ------------------------------------------------------------------------------------------------------
// Method Shadowing (Overriding Prototypes locally)
// ------------------------------------------------------------------------------------------------------
// JS looks for a method on the object first. If it finds it, it stops looking up the chain.

let profile = {
    name: "Retam",
    toString() {                            // Shadows the default Object.prototype.toString()
        console.log("This is My Custom Method..");
    }
};
profile.toString();                         // Executes the custom one, not the default Object one



