// Object is a standalone data type used to store collections of data and more complex entities as key-value pairs

// let sampleObject{
//     key: Value --> Property when value belongs to any of number, string, array, object(nested),..
//     key: Value as Function --> Method when value belong to any Function
// }

// NOTE : Key is always a string even if you write without quotation

let studentProfile = {
  name: "Anushka",
  age: 21,
  isEnrolled: true,
  "is-mad":true
}

// Accessing Object Properties --> Dot and Bracket Notation
console.log(studentProfile.name);
console.log(studentProfile.age);
console.log(studentProfile["isEnrolled"]);
console.log(studentProfile["is-mad"]); // Bracket notation must needed if space or, special character is given; otherwise both bracket and dot are accepted

// Dynamic Variable search
let myName = "name";
// console.log(studentProfile["myName"]); NOT valid!!
console.log(studentProfile[myName]);
console.log("--------------------------------------------------------------------------------------");

// Adding a property
studentProfile.phone = "Samsung";
console.log(studentProfile);

// Modifying a Property 
studentProfile.phone = "Samsung M21";
console.log(studentProfile);

// Deleting a property
delete studentProfile["is-mad"];
console.log(studentProfile);
console.log("--------------------------------------------------------------------------------------");

// Extracting Keys, Values, and Entries and convert to Array 
// SYNTAX => Object.keys(.); Object.values(.); Object.entries(.)
let getKeys = Object.keys(studentProfile);
let getValues = Object.values(studentProfile);
let getEntries = Object.entries(studentProfile);
console.log(getKeys);
console.log(getValues);
console.log(getEntries);
console.log("--------------------------------------------------------------------------------------");

