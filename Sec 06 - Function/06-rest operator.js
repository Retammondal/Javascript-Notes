// Rest Operator Usage in Function Arguments...
// Allows the function to accept an indefinite number of arguments as a clean, genuine JavaScript array
// Usage : Function can take unlimited arguments without error

function add(first, second, ...restNumbers) {
    console.log(first);        // 53
    console.log(restNumbers);  // [7, 56, 85, 2] (Packs the rest into an array)
}
add(53, 52, 7, 56, 85, 2);