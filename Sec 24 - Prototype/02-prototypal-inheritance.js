console.log("----------------------------5------------------------------");
// ------------------------------------------------------------------------------------------------------
// Prototypal Inheritance using Object.create()
// ------------------------------------------------------------------------------------------------------
// Object.create(prototype) creates a new object and sets its __proto__ to the passed object.

let obj = Object.create(null);              
console.log(obj);                           // Creates an absolutely empty object (No default prototype!)

let common = {
    eat() { console.log("Eating..."); },
    name: "retam",
    age: 17
};

let person = Object.create(common);         // person inherits from common
person.walk = function() {
    console.log("Walking...");
};

let student = Object.create(person);        // student inherits from person (which inherits from common)
student.study = function() {
    console.log("Studying...");
};

                                            // Here is exactly how the prototype chain looks for your code:
                                            // person → common → Object.prototype → null

student.eat();                              // ✅ Works! Found way up the chain in 'common'

// 💡 hasOwnProperty() checks if the property belongs directly to the object, NOT its prototype
console.log(student.hasOwnProperty("study"));   // ✅ true (Added directly to student)
console.log(student.hasOwnProperty("eat"));     // ❌ false (Inherited from common)

console.log("----------------------------6------------------------------");
// ------------------------------------------------------------------------------------------------------
// instanceof & Getting/Setting Prototypes
// ------------------------------------------------------------------------------------------------------

// instanceof checks: Does this object have this Class/Constructor's prototype in its chain?
console.log(u1 instanceof User);            // ✅ true 

// Since EVERYTHING inherits from Object eventually:
console.log(String instanceof Object);      // ✅ true
console.log(Number instanceof Object);      // ✅ true
console.log(Function instanceof Object);    // ✅ true
console.log(Object instanceof String);      // ❌ false

// 🛠️ Modern ways to check and change Prototypes 
// Note: __proto__ is considered legacy, prefer Object.getPrototypeOf()

console.log(student.__proto__);                                 // Legacy way
console.log(Object.getPrototypeOf(student));                    // ✅ Modern way
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student))); // Getting Parent's Parent
console.log(student.__proto__.__proto__);                           // Getting Parent's Parent

console.log(u1.__proto__);

// Dynamically changing the prototype (Use carefully, can be bad for performance)
Object.setPrototypeOf(student, {
    hello() { console.log("Hello!"); }
});

console.log(Object.getPrototypeOf(student));                    // Now points to the new { hello } object
student.hello();