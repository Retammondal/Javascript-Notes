// Find and searching any element from array 
const array = [2,5,7,8,9,6,3,4,2]

// -----------------------------------------------------------------------------
// .IndexOf(index)
// -----------------------------------------------------------------------------
// IndexOf is a method to give value at that index (Immutable)
// if it doesn't find any will give -1

console.log(array.indexOf(8));
console.log(array.indexOf(15));         // -1

console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// .find(callBackFunction)
// -----------------------------------------------------------------------------
// Array.find(()=>{})
    // find takes a callback function 
    // and finds any element based on condition 

let respon = array.find((value) =>{
    return value === 3;
}
)
console.log(respon);                    // it gives first element that satisfies condition 
                                        // if it didn’t get any gives undefined


let respon1 = array.find((value) =>{
    if(value >3){
        return value;
    }
})
console.log(respon1);                   // will only give the first > 3 

console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// .find(callBackFunction) --> Reference Rule
// -----------------------------------------------------------------------------
// Primitives are passed by Values
// Object are passed by Reference

// Primitives (Numbers, Strings, Booleans)
let nums = [1, 2, 3, 2, 5, 6];
let foundNum = nums.find(val => val === 2);     

foundNum = 99; 

console.log(nums);                      // Output: [1, 2, 3] (Original array is SAFE)

// Object and Arrays
let users = [
    { isPassed: true, name: "Alice" }, 
    { isPassed: false, name: "Bob" },
    { isPassed: true, name: "Retam"},
    { isPassed: false, name: "Shyam"}
];
let foundUser = users.find(user => user.isPassed === true);

foundUser.name = "Anuska";              // Modifying a property changes the original array
foundUser = { id: 99, name: "Ram" };   // ❌ Don't change anything

console.log(users);                     // Output: "Anuska" (Array is CHANGED)
console.log(users);

console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// .findIndex(callBackFunction)
// -----------------------------------------------------------------------------
// Similar like .find but just give index of that value
// Array.findindex(()=>{}) -> it gives index

let foundNumIndex = nums.findIndex(val => val === 2); 
let foundUserIndex = users.findIndex(user => user.isPassed === true);


// -----------------------------------------------------------------------------
// .findLast(callBackFunction) & .findLastIndex(callBackFunction)
// -----------------------------------------------------------------------------
// Just gives from Last side
// Searches first from Last, but Give Index based on 0 Indexing from Start

let foundNumLast = nums.findLast(val => val === 2);
let foundUserLast = users.findLast(user => user.isPassed === true);

let foundNumLastIndex = nums.findLastIndex(val => val === 2);
let foundUserLastIndex = users.findLastIndex(user => user.isPassed === true);


console.log(`${foundNumLast} is in Index of ${foundNumIndex}`);     // foundNum = foundNumLast
console.log(foundUserLast ,`is in Index of ${foundUserIndex}`);

console.log("----------------------------------------------------------");

console.log(`${foundNumLast} is in Index of ${foundNumLastIndex}`);
console.log(foundUserLast ,`is in Index of ${foundUserLastIndex}`);