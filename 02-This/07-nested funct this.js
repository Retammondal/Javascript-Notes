const student = {
    name: "Retam Mondal",
    printName: function() {
        // 'this' here = student
        
        function innerFunction() {
            // 'this' here = Global (or undefined in strict mode)
            console.log(this.name); 
        }
        innerFunction(); // undefined (NOT "Retam Mondal")
    }
};

student.printName(); // undefined

// Fix: Use arrow function (inherits this)
const student2 = {
    name: "Retam Mondal",
    printName: function() {
        // 'this' here = student2
        
        const innerFunction = () => {
            console.log(this.name); // Inherits from parent
        };
        innerFunction(); // "Retam Mondal"
    }
};

student2.printName(); // "Retam Mondal"

// Fix: Use bind
const student3 = {
    name: "Retam Mondal",
    printName: function() {
        function innerFunction() {
            console.log(this.name);
        }
        innerFunction.bind(this)(); // Bind 'this' to innerFunction
    }
};

student3.printName(); // "Retam Mondal"

// Fix: Store 'this' in a variable (old-school)
const student4 = {
    name: "Retam Mondal",
    printName: function() {
        const self = this; // Store reference
        function innerFunction() {
            console.log(self.name);
        }
        innerFunction();
    }
};

student4.printName(); // "Retam Mondal"