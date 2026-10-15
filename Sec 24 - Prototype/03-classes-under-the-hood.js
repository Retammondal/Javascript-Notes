console.log("----------------------------7------------------------------");
// ------------------------------------------------------------------------------------------------------
// Classes & Prototypes Under the Hood (Memory Optimization)
// ------------------------------------------------------------------------------------------------------
let count = 0;

class User {
    country = "india";                      // Top-level / Instance property
    
    constructor(name, country2) {
        this.name = name;                   // Instance property (Unique per object)
        this.country = country2;            // Instance property (Unique per object)
    }

    printName() {                           // Instance Method (Goes to the Prototype!)
        console.log(this.name);
        count++;
    }
}

const u1 = new User("Nishant", "India");
const u2 = new User("Akshay", "India");

// 💡 MEMORY TRICK: Why do methods go on the prototype?
// If printName was inside the constructor, every object would get its own duplicate copy of the function.
// By placing it on the prototype, thousands of 'User' objects share ONE single function in memory.

console.log(u1.printName === u2.printName); // ✅ true (They point to the EXACT same function reference in memory)

u1.printName();
u2.printName();
console.log(`Count: ${count}`);             // Outputs: 2

