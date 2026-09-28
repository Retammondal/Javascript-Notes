
// ------------------------------------------------------------------------------
// Spread Operator
// ------------------------------------------------------------------------------
// Spread Operator converts Iterable ---unpacking---> Individual Elements
// NOTE : Order of Properties conserved while copy or merging
// Syntax : ...array


let arr = [53,52,7,56,85,2,36,54]
console.log("Array -> ", arr);
console.log("Array Spreaded -> ", ...arr);         // You will notice all will be unboxed

// ------------------------------------------------------------------------------
// UseCase : Math.min(array)
// ------------------------------------------------------------------------------
console.log(Math.min(arr));         // will give NaN b/c they are in packed situation (array)
console.log(Math.min(...arr));      // Spread will unbox/unpack them

console.log("----------------------------------------------------------");

// ------------------------------------------------------------------------------
// UseCase : Copying Array
// ------------------------------------------------------------------------------
let original = [4,5,2,3];
let copy = [...original];
console.log(original);
console.log(copy);

console.log("----------------------------------------------------------");

// ------------------------------------------------------------------------------
// UseCase : Merging Array
// ------------------------------------------------------------------------------
let arr1 = [2,4];
let arr2 = [4,6];

// How to merge them
let mergedArr1 = arr1 + arr2;           // Wrong!!
let mergedArr2 = [arr1, arr2];          // Wrong!!

// How to merge them -- Right Way!!
let mergedArr3 = [...arr1, ...arr2]

console.log(mergedArr1);                // Output will be 2,44,6
console.log(mergedArr2);                // Output will be Nested Array
console.log(mergedArr3);

console.log("----------------------------------------------------------");

// ------------------------------------------------------------------------------
// UseCase : Adding Elements
// ------------------------------------------------------------------------------
let addArr = [1,...arr1 , 8]
console.log(addArr);

console.log("----------------------------------------------------------");