
// ------------------------------------------------------------------------------------------------------
// Part 3: Arrow Functions and Lexical 'this'
// ------------------------------------------------------------------------------------------------------
// Regular Function -> Has its own 'this', depends on WHERE you call it.
// Arrow Function   -> Has NO 'this' of its own. It searches Lexically (finds Parent scope).
//                  -> Don't Depend on How we are calling?

let product = {
    name: "IPhone",
    printName: () => {
        console.log(this.name);                         // ❌ Output: undefined
    }                                                   // Arrow func has no 'this', so it goes to the outer 
};                                                      // lexical scope (Global). Global has no 'this.name'.
product.printName();

let product1 = {
    name: "IPhone",
    printName: function() {                             // Regular function creates its own 'this' (product1)
        let name = "Something";
        const print = () => {
            console.log(this.name);                     // ✅ Output: "IPhone"
            console.log(name);                          // ✅ Output: "Something" (Standard Lexical Scope)
        };                                              // Arrow func inherits 'this' from printName func!
        print();
    }
};
product1.printName();

// ----------------------------- NOTE  -------------------------------

const obj = {                                           // Arrow function in object method - BAD PRACTICE
    name: "Test",
    getName: () => this.name                            
};
console.log(obj.getName());                             // undefined (or global name)


const obj2 = {                                          // Regular function in object method - GOOD PRACTICE
    name: "Test",
    getName: function() {
        return this.name;
    }
};
console.log(obj2.getName());                            // "Test"
