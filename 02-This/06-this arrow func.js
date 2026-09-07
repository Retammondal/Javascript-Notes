const student = {
    name: "Retam Mondal",
    printName: function() {
        // Arrow function inherits 'this' from printName
        const print = () => {
            console.log(this.name);
        };
        print(); // "Retam Mondal" - this comes from parent
    }
};

student.printName(); // "Retam Mondal"

// ---------- IMPORTANT: Arrow Function in Global Scope ----------
var name1 = "Something";
const product1 = {
    name1: "iPhone",
    printName: () => {
        console.log(this.name1);
    }
};

// In Node.js: undefined (this = empty object)
// In Browser: "Something" (this = window)
product1.printName();


// ---------- NOTE  ----------

// Arrow function in object method - BAD PRACTICE
const obj = {
    name: "Test",
    getName: () => this.name // 'this' is NOT obj!
};
console.log(obj.getName()); // undefined (or global name)

// Regular function in object method - GOOD PRACTICE
const obj2 = {
    name: "Test",
    getName: function() {
        return this.name;
    }
};
console.log(obj2.getName()); // "Test"