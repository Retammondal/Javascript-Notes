// Rest Operator 
// --> Exactly Opposite of Spread Operator
// --> It gathers remaining, standalone elements and compresses them into a single Array or Object.
// Syntax : ...array


// ------------------------------------------------------------------------------
// Destructuring + Rest Operator!
// ------------------------------------------------------------------------------
// takes all the rested out keys
const user = { nameP: 'Retam', age: 17, role: 'Admin', address: "Mallickpur" };

const {nameP, age, ...restKey} = user;
console.log(nameP);
console.log(age);
console.log(restKey);           // Give all the rest {Key:value} in Object
