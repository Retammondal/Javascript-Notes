// By calling the function from any Object method we get Object from where method is called

const student = {
    name: "Retam Mondal",
    printName: function() {
        console.log(this.name);
    }
};

student.printName();            // "Retam Mondal" - this = student

// Using bracket notation - SAME RESULT
student["printName"]();         // "Retam Mondal" - this = student

// ---------------------------------------------------------------------------------------------------
//  The Before the Dot Rule
// ---------------------------------------------------------------------------------------------------

const student2 = {
    name : "Ram Mondal",
    printName : student.printName       // Creates a reference of Function copy
}

student2.printName();           // Ram Mondal
// Even though it's the SAME function, 'this' changes
// because it's called on a DIFFERENT object!

// ---------------------------------------------------------------------------------------------------
//  The Dangerous Part: Losing this
// ---------------------------------------------------------------------------------------------------

// ❌ Loses 'this' - function reference without the object
const result = student.printName;
result();                               // undefined (or global in non-strict mode)

// Why? Because there's NO object before the dot!
// It's just a function call, so Rule 1 (Default Binding) applies