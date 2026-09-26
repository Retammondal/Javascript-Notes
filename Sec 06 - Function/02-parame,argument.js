// ---------------------------------------------------------------------------------------------
// Parameter vs Argument
// ---------------------------------------------------------------------------------------------
// Parameters -> variables inside function
// Arguments -> Actual data passed during function calling

function greetUser(name) {                          // 'name' is the Parameter
    console.log("Hello " + name + "!");
}

greetUser("Retam");                                 // "Alice" is the Argument

console.log("----------------------------------------------------------");

// ---------------------------------------------------------------------------------------------
// Default parameter
// ---------------------------------------------------------------------------------------------
// Fallback value assigned when No Arguments passed on..
function greetUser2(name,age,current_year=2026){
    console.log(
        `Hello, ${name}, your age is ${age}Y w.r.t. ${current_year}`
    );
}
greetUser2("Retam",16,2025)
greetUser2("Retam",16)                  // By default current year will take 2026
greetUser2("Retam")                     // age will come undefined

// *** Here the concept of named arguement is not present like python, 
// we have to follow orders (age=16,name="Retam")       -- NO!
// That's why always write default parameter at end during creation..

// ---------------------------------------------------------------------------------------------
// Undefined vs Null Argument
// ---------------------------------------------------------------------------------------------
// Default will trigger --> No Argument pass or, Undefined
// Default willn't trigger --> null, 0, ""

greetUser2("Anuska",18,undefined);      // Default only trigger for entirely missing or, undefined
greetUser2("Anuska",18,null);           // Default will not trigger for null,0 or, ""
greetUser2("Anuska",18,0);              // Default will not trigger for null,0 or, ""
greetUser2("Anuska",18,"");             // Default will not trigger for null,0 or, ""


// ---------------------------------------------------------------------------------------------
// Dynamic Evaluation
// ---------------------------------------------------------------------------------------------
// default value doesn't have to be a static string; 
// it can be a mathematical expression or even another function call.
function getDefaultPrice() {
  return 100;
}
let price2 = 20;
let price3 = 40;

function calculateTotal(price1 = getDefaultPrice()*2, restPrice = price2+price3) {
  return price1 + restPrice;
}

console.log(calculateTotal(300, 400));
console.log(calculateTotal(undefined,300));     // want 1st one to be default -> pass Undefined
console.log(calculateTotal());

// ---------------------------------------------------------------------------------------------
// Referencing Previous Parameters
// ---------------------------------------------------------------------------------------------
// *** Note : Parameters Evaluates from left to right
// We can use parameters from Left to Right

function calculateMRP(price = 100, tax = price * 0.1) {           // MRP = Price + Tax
  return price + tax;
}
console.log(calculateMRP());        // Output: 110 (100 + 10)
console.log(calculateMRP(50));      // Output: 55  (50 + 5)

// ---------------------------------------------------------------------------------------------
// Parameter Ordering
// ---------------------------------------------------------------------------------------------
// Parameters Evaluates from left to right
// Always place default parameters at the very end, Otherwise have to give Undefined

function badOrder(tax = 0.1, price) {       // ❌ Poor Practice (Hard to invoke)
  return price + (price * tax);
}
badOrder(undefined, 100);                   // Awkward: Requires explicit 'undefined'

function goodOrder(price, tax = 0.1) {      // ✅ Best Practice
  return price + (price * tax);
}
goodOrder(100);                             // Clean and logical









