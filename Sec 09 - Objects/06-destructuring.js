// Object destructuring extracts values from an object using their property keys. 
// The order of the variables does not matter; 

const user = { nameP: 'Retam', age: 17, role: 'Admin', address: "Mallickpur" };

// Traditional way
    // const nameP = user.nameP;
    // const age = user.age;

// Destructuring way
const { nameP, age } = user;

console.log(nameP); // 'Alice'
console.log(age);  // 25


// ---------------------------------------------------------------------------------------
// Renaming Variables
// ---------------------------------------------------------------------------------------
// We have to give same variable name as of Object key, but we can rename the varible name
// use a colon (:)

const {role : userRole} = user;
console.log(userRole);

// ---------------------------------------------------------------------------------------
// Default Values
// ---------------------------------------------------------------------------------------
// Assign a fallback value if doesn't exist

const { qualification = 'IIM Graduate', address } = user; 

console.log(qualification);         // (since qualification wasn't in user)
console.log(address);
