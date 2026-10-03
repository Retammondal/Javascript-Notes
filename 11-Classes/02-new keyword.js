// ------------------------------------------------------------------------------------------------------
// Solving the 'this' Problem: The 'new' Keyword
// ------------------------------------------------------------------------------------------------------
// 'new' automatically does 3 things: 
// 1. Creates a blank, plain JavaScript object.
// 2. Points 'this' to that newly created object.
// 3. Automatically returns 'this' at the end of the function.

// ------------------------------------------------------------------------------------------------------
// Constructor Function + The 'new' Keyword
// ------------------------------------------------------------------------------------------------------

function Testing(name, price) {         // Note: Constructor functions usually start with a Capital letter
    this.name = name;
    this.price = price;                 // No need to return 'this', it returns automatically
    
    return "Hiiii";                     // 💡 If called with 'new', JS ignores primitive returns (like strings) 
}

const p3 = new Testing("Vivo V30", 30000);  // ✅ CORRECT: 'new' creates a fresh object for p3
const p4 = new Testing("Oppo k13", 35000);  // ✅ CORRECT: 'new' creates a fresh object for p4
const p5 = Testing("Vivo Y15", 15000);      // ❌ WRONG: Missing 'new', so it acts like a normal function

console.log(p3);                        // Outputs: Testing { name: 'Vivo V30', price: 30000 }
console.log(p4);                        // Outputs: Testing { name: 'Oppo k13', price: 35000 }
console.log(p5);                        // Outputs: "Hiiii" (Because it just returned the string!)

// Verifying property access
console.log(p3.name, p3.price);         // ✅ "Vivo V30" 30000
console.log(p4.name, p4.price);         // ✅ "Oppo k13" 35000
console.log(p5.name, p5.price);         // ❌ undefined undefined (How will it get access? p5 is just a string!)