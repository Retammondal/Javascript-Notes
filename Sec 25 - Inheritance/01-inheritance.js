// ------------------------------------------------------------------------------------------------------
// Part 1: The Problem - Repeating Code (Without Inheritance)
// ------------------------------------------------------------------------------------------------------
// Real Life Case : E-Commerce Platform
// User (Parent) --> Customer, Seller, Admin (Child)
class CustomerAmazon {
    constructor(name, age) { 
        this.name = name; this.age = age; 
    }
    buyProduct() {} 
    addToCart() {} 
    login() {} 
    logout() {}
}
class SellerAmazon {
    constructor(name, age) { 
        this.name = name; this.age = age; 
    }
    addProduct() {} 
    login() {} 
    logout() {}
}
class AdminAmazon {
    constructor(name, age) { 
        this.name = name; this.age = age; 
    }
    hideProduct() {} 
    login() {} 
    logout() {}
}



// ------------------------------------------------------------------------------------------------------
// Part 2: The Solution - Inheritance (The Parent Class)
// ------------------------------------------------------------------------------------------------------
// Notice things are repeating? 
// Making 'User' the Parent (Base Class) for all.
// Inheritance --> one object or class can acquire the properties and methods of another.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    login() { console.log(`${this.name} is Logging In ...`); }            // Common Action for all users
    logout() { console.log(`${this.name} is Logging Out ...`); }          // Common Action for all users
}


// ------------------------------------------------------------------------------------------------------
// Part 3: Child Classes (Using 'extends' and 'super()')
// ------------------------------------------------------------------------------------------------------
// 'extends' inherits properties from the Parent via the Prototype Chain.

// Now here it's happening like Customer Class is taking Constructor of User
// means whenever we will call Customer, it willl use User Default Constructor and use `this` object from there
// Now we want to create Separeate Constructor for Seller now, by doing this i have to import the 
// default User constructor portion also --> super Constructor = super()

// --------------------------------------------------------------------------
// 1. Implicit Constructor: Customer takes User's constructor automatically.
// --------------------------------------------------------------------------
class Customer extends User {
    buyProduct() { console.log(this.name, "Buying.."); }        // Customer specific action
    addToCart() { console.log(this.name, "Adding.."); }         // Customer specific action
}

// --------------------------------------------------------------------------
// 2. Explicit Constructor: Seller needs its own constructor, so it must call super().
//    super() tells which thing to first take from Parent Class Constructor
// --------------------------------------------------------------------------
class Seller extends User {
    productList = [];                                           // Instance property (fresh per object)
    
    constructor(name, age, phone) {
        super(name, age);                                       // Calls User constructor (name, age)
        this.phone = phone;                                     // Seller specific property
    }
    
    addProduct(item) { 
        console.log(`${this.name} (Ph: ${this.phone}) adding ${item}`);
        this.productList.push(item);
        console.log(this.productList);
    }
    
    static sendMessage() {
        console.log(`Sending Message to ...`);
    }  // Static methods NOT shared to instances
}

class Admin extends User {
    hideProduct() { console.log("Hiding Product..."); } 
}


// ------------------------------------------------------------------------------------------------------
// Part 4: Instantiation & Testing
// ------------------------------------------------------------------------------------------------------
console.log("\n------------------------1--------------------------");

const c1 = new Customer("Retam", "Retammondal2020@gmail.com");
console.log(c1);
c1.login();                                                     // Inherited from User
c1.addToCart();                                                 // Specific to Customer
c1.buyProduct();                                                // Specific to Customer
c1.logout();                                                    // Inherited from User

console.log("\n------------------------2--------------------------");

const s1 = new Seller("Retam", "Retam@zohomail.in", 7074816145);
s1.addProduct("Macbook");
s1.addProduct("IPhone");

const s2 = new Seller("Rishob", "Rishob@zohomail.in", 9836606549);
s2.addProduct("Gold Chain");
s2.addProduct("Gold Ring");

console.log(s1.name, "uploads -->", s1.productList);            // Output: ["Macbook", "IPhone"]
console.log(s2.name, "uploads -->", s2.productList);            // Output: ["Gold Chain", "Gold Ring"]

// Doubt Resolved: productList is [] by default, but when using 'new', a fresh, 
// independent array is created for each specific instance (s1 and s2 don't mix).

console.log("\n------------------------3--------------------------");
// ------------------------------------------------------------------------------------------------------
// Part 5: Multi-Level Inheritance
// ------------------------------------------------------------------------------------------------------
// Hierarchy: User --> Seller --> PremiumSeller

class PremiumSeller extends Seller {
    constructor(name, age, subscription) {
        super(name, age);           // This Super will call apne Parent seller ke Constructor then               
        // Seller again search for it's parent User Constructor
        this.subscription = subscription;
    }
    
    getSubscription() {
        console.log(`${this.name} has ${this.subscription} Subscription`);
    }
}

const s3 = new PremiumSeller("RetamMondal", "Retammondal@gmail.com", "Premium");
s3.addProduct("Glamour Bike");                                  // Inherited from Seller (phone is 
// undefined because we didn't pass it)
s3.getSubscription();                                           // Specific to PremiumSeller

console.log("\n------------------------4--------------------------");
// Static Method Checking


Seller.sendMessage();
PremiumSeller.sendMessage();                                    // Will inherits (static Method)
// s2.sendMessage();       --> Instances will not take the Property
// s3.sendMessage();