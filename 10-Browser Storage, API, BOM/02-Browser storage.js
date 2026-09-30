
// ------------------------------------------------------------------------------------------------------
// Browser Storage --> Local Storage & Session Storage
// ------------------------------------------------------------------------------------------------------
// Local -> Keeps data permenantly untill we delete in Browser API for that Domain; 
// Session -> Keeps data only in Current Tab/ per Session

// 1. Saving Data
localStorage.setItem("theme", "dark");
localStorage.setItem("username", "Retam");

// 2. Retrieving Data
const userTheme = localStorage.getItem("theme");      // returns value
const userTheme1 = localStorage.getItem("color");     // returns null as No Key
console.log(userTheme);                             // "dark"

// 3. Getting Key from Index
let result2 = localStorage.key(0)       // just like an Index 0; returns key
let result3 = localStorage.key(1)       // Index 1 -> null (No Data)

// 4. Removing a single item
localStorage.removeItem("username");

// 5. Wiping everything
localStorage.clear();

// NOTE : Will not work in node.js b/c it's browser part, run in browser


// ------------------------------------------------------------------------------------------------------
// Session Storage can be created by same way


// ------------------------------------------------------------------------------------------------------
// The JSON Trap (Storing Arrays and Objects)
// ------------------------------------------------------------------------------------------------------
// Browser Storage only takes Strings; what if we want to give Object/ Array

const user = { name: "Retam", age: 25 };

localStorage.setItem("user", user);                     // ❌ WRONG APPROACH
console.log(localStorage.getItem("user"));              // Outputs: "[object Object]"


localStorage.setItem("user", JSON.stringify(user));     // ✅ CORRECT: Convert to string before saving

const storedUserString = localStorage.getItem("user");  // ✅ CORRECT: Parse back to an object after retrieving
const actualUserObject = JSON.parse(storedUserString);

console.log(actualUserObject.name);                     // "Retam"