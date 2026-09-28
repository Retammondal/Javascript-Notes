// Optional Chaining
// If tries to access a property doesn't exist, it safely returns undefined instead of crashing.

const user = {
  name: "Retam",
  qualification: "MBA",
  college: "IIM Bangalore",
  // Shorthand method definition
  greet() {
    return `Hello, my name is ${this.name}.`;
  },
  details: function(){
    return `Hello, my name is ${this.name}
        My Qualification ${this.qualification} from ${this.college}`;
  }
};

// Calling the Properties from Object
console.log(user.name);         // BAD PRACTICE
console.log(user?.name);        // GOOD PRACTICE --> Using Optional Chaining

console.log(user?.age);         // undefined

console.log("----------------------------------------------------------");

// Calling Function inside Object
console.log(user?.greet?.());
console.log(user?.details?.());

console.log(user?.channel?.());     // undefined.. No Crash