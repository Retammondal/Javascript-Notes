// Rest Operator 
// --> Exactly Opposite of Spread Operator
// --> It gathers remaining, standalone elements and compresses them into a single Array or Object.
// Syntax : ...array


// ------------------------------------------------------------------------------
// Destructuring + Rest Operator!
// ------------------------------------------------------------------------------

let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];

const [equip1, ...restEquip] = cart;
console.log(equip1);    // "Laptop"
console.log(restEquip); // ["Mouse", "Keyboard", "Monitor"]

// Rest Operator Used , now again using  ... as Spread Operator
console.log(...restEquip);