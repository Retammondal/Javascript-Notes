// ------------------------------------------------------------------------------------------------------
// 'this' Keyword & Constructor Functions (Before ES6 Classes)
// ------------------------------------------------------------------------------------------------------
// Arrow Function -> Takes 'this' from its Parent scope (Lexical scoping)
// Function Declaration -> Takes its own 'this' (Depends entirely on how the function is called)

// 1. Basic Object Creation
let user = {
    name: "Retam"
}
user.phone = 7074816145;
console.log(user);                      // Outputs: { name: 'Retam', phone: 7074816145 }


// ------------------------------------------------------------------------------------------------------
// The Global 'this' Trap (Calling a Constructor without 'new')
// ------------------------------------------------------------------------------------------------------
function Product(name, price) {
    // By calling this function normally (in Global scope), 'this' points to the Global Object (Window).
    this.name = name;                   // Adding properties to the Global Object!
    this.price = price;
    return this;
}

Product();                                      // ❌ Name & Price become undefined on the global object            

const p1 = Product("Samsung Fold", 150000);
const p2 = Product("Asus Vivobook", 83000);     // ❌ Overwrites the global 'this.name' and 'this.price'

// 🚨 THE PROBLEM: Because Product() is called without 'new', it modifies the same global 'this'.
// It does NOT create a new instance, so p2 completely overwrites the global values set by p1.
console.log(p1.name);                           // Outputs: "Asus Vivobook" (Unexpected behavior!)


// ------------------------------------------------------------------------------------------------------
// Local Variables vs. Global 'this'
// ------------------------------------------------------------------------------------------------------
function Product1(price) {
    let num = 10;                       // Local variable, independent in every function call
    num += price;
    return num;
}

const p10 = Product1(100);
const p20 = Product1(120);

// ✅ Works perfectly fine. Since we are using a local variable ('let') instead of 'this', 
// each function call gets its own independent call stack and execution context.
console.log(p10);                       // Outputs: 110 


