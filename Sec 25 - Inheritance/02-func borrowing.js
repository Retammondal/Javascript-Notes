// ------------------------------------------------------------------------------------------------------
// Call, Apply, and Bind (Function Methods to Control 'this')
// ------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------
// Part 1: The Problem (Repeating Methods)
// ---------------------------------------------------------
let user1 = {
    name: "Ranit",
    age : 22,
    printName() { console.log(`Hi, I am ${this.name}`); }       // ◀ Repeating method
}

let user2 = {
    name: "Swagata",
    age : 21,
    printName() { console.log(`Hi, I am ${this.name}`); }       // ◀ Repeating method
}

user1.printName();                                              // Output: Hi, I am Ranit
user2.printName();                                              // Output: Hi, I am Swagata

let user3 = {
    name: "Anuska",
    age : 17
}                                                               // user3 has no printName method!


// ---------------------------------------------------------
// Part 2: The .call() Method
// ---------------------------------------------------------
// Syntax: function.call(thisArgument, arg1, arg2, ...)
// Purpose: Invokes the function immediately, setting 'this' to the provided object.

// I want to use printName on user3. Let's "borrow" it from user1:
user1.printName.call(user3);                                    // Output: Hi, I am Anuska
                                                                // .call(user3) forces 'this' to be user3

// Using .call() on a standalone function with arguments
function printDetails(country = "India") {
    console.log(`Hi, I am ${this.name}, ${this.age}, living in ${country}`);
}

// 1st Arg is ALWAYS the 'this' context; 2nd Arg onwards are passed to the function
printDetails.call(user1, "Australia");                          // Output: ...Ranit, 22, in Australia
printDetails.call(user2);                                       // Output: ...Swagata, 21, in India
printDetails.call(user3, "United States");                      // Output: ...Anuska, 17, in United States


// ---------------------------------------------------------
// Part 3: The .apply() Method
// ---------------------------------------------------------
// Syntax: function.apply(thisArgument, [arg1, arg2, ...])
// Purpose: Exactly the same as .call(), but arguments are passed as an ARRAY.

printDetails.apply(user2, ["Bhadura"]);                         // Output: ...Swagata, 21, in Bhadura


// ---------------------------------------------------------
// Part 4: The .bind() Method
// ---------------------------------------------------------
// Syntax: function.bind(thisArgument, arg1, arg2, ...)
// Purpose: Returns a NEW function for later execution, with 'this' permanently bound.

const newFun = printDetails.bind(user1, "Australia");
console.log(newFun);                                            // Output: [Function: bound printDetails]
newFun();                                                       // Output: ...Ranit, 22, in Australia

const newFun1 = printDetails.bind(user2);                       // Binding 'this', but passing args later
newFun1("Sri Lanka");                                           // Output: ...Swagata, 21, in Sri Lanka

const newFun2 = printDetails.bind(user3, "Arab Emirates");      // Hard-binding "Arab Emirates" directly
newFun2("Sri Lanka");                                           // Arab Emirates wins because it was bound 
                                                                // first when generating the function!