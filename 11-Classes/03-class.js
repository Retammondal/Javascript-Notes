
// ------------------------------------------------------------------------------------------------------
// The Modern Alternative: ES6 Classes (Syntactic Sugar over Constructors)
// ------------------------------------------------------------------------------------------------------
// Convention: Class names should always start with a Capital Letter (PascalCase).

class User {
    address = "Mallickpur";             // Default property (Same for all instances unless overridden)
    
    // The constructor is automatically invoked when creating a new instance with 'new'
    constructor(name, age) {            
        this.name = name;               // Instance property
        this.age = age;                 // Instance property
    }

    printName() {                       // Instance method (Available to all created objects)
        console.log(this.name);
    }
}

// const u1 = User("Retam", 17);        // ❌ WRONG: Cannot call a Class Constructor without 'new'
const u1 = new User("Retam", 17);       // ✅ CORRECT: 'new' creates a fresh instance (copy) of the class

console.log(u1);                        // Outputs: User { address: 'Mallickpur', name: 'Retam', age: 17 }
console.log(u1.name, u1.age);           // Outputs: "Retam" 17
u1.printName();                         // Outputs: "Retam"

// Updating Properties
u1.name = "Retam Updated";
console.log(u1);                        // Outputs: User { address: 'Mallickpur', name: 'Retam Updated', age: 17 }


// ------------------------------------------------------------------------------------------------------
// Advanced Classes: Encapsulation (Private Fields) & Static Members
// ------------------------------------------------------------------------------------------------------
console.log("\n--- Bank Example Below ---\n");

class Bank {
    // 1. Private Properties (Encapsulation)
    // Declared with a '#' prefix. Cannot be accessed or modified from outside the class.
    #balance;                           

    // 2. Static Properties
    // Belongs to the Class itself, NOT to individual instances (acc1, acc2, etc.)
    static totalBankMethod = 0;         

    constructor(initialBalance) {
        this.#balance = initialBalance;
        Bank.totalBankMethod++;         // Accessing static property via Class name
    }

    // Instance Methods (How the outside world interacts with private data)
    get() {
        console.log(`Current Balance: ₹${this.#balance}`);
        Bank.totalBankMethod++;
    }

    withdraw(amount) {
        Bank.totalBankMethod++;
        if (amount > this.#balance) {
            console.log("❌ Don't have Sufficient Balance");
            return;
        }
        this.#balance = this.#balance - amount;
        console.log(`✅ Withdrew ₹${amount}`);
    }

    deposit(amount) {
        this.#balance += amount;
        Bank.totalBankMethod++;
        console.log(`✅ Deposited ₹${amount}`);
    }

    // 3. Static Methods
    // Utility functions that belong to the blueprint (Bank) and not the created objects.
    static calculateTax() {             
        console.log("Calculating Tax...");
        Bank.totalBankMethod++;
    }
}

let acc1 = new Bank(15000);

// ✅ Interacting with the object safely via instance methods
acc1.get();                             // Current Balance: ₹15000
acc1.withdraw(14000);                   // ✅ Withdrew ₹14000
acc1.get();                             // Current Balance: ₹1000
acc1.withdraw(2000);                    // ❌ Don't have Sufficient Balance
acc1.deposit(20000);                    // ✅ Deposited ₹20000
acc1.get();                             // Current Balance: ₹21000


// ------------------------------------------------------------------------------------------------------
// Why Private & Static matter (Access Restrictions)
// ------------------------------------------------------------------------------------------------------

// 🚨 THE PROBLEM WITHOUT PRIVATE FIELDS:
// acc1.balance = 2000;                 // If 'balance' wasn't private, anyone could rewrite the money amount!
// Solution: Private property (#balance) forces users to use deposit() and withdraw() methods.

// ❌ DIRECT PRIVATE ACCESS (ERRORS)
// acc1.#balance = 12000;               // SyntaxError: Private field '#balance' must be declared in an enclosing class

// ❌ INSTANCE ACCESSING STATIC METHOD (ERRORS)
// acc1.calculateTax();                 // TypeError: acc1.calculateTax is not a function (Don't want this accessible publicly by users)

// ✅ CORRECT STATIC ACCESS
// Static methods and properties can ONLY be accessed directly on the Class itself.
Bank.calculateTax();                    // Outputs: "Calculating Tax..."
console.log(`Total Bank Operations: ${Bank.totalBankMethod}`); // Outputs: Total count of operations