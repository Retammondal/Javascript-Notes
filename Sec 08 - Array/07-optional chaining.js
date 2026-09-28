// Optional Chaining --> Error Handing to extract Array Data
// Syntax : arr?.[index]

// ------------------------------------------------------------------------------
// Why Need That?
// ------------------------------------------------------------------------------
const arr = ["Retam", 17, true];
console.log(arr?.[2]);
console.log(arr[5]);        // By Default gives Undefined, then why need of Optional Chaining


// Reason : when array not valid then..
const array = "Hello";      // This array is not valid to call any index value..
// console.log(array[5]); --> Give Error
console.log(array?.[5]);    // Undefined