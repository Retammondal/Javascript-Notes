
// flat -> make all nested array in same array
// Condition : flat() does in 1 level i.e., flat(1) by default

let array1 = [2,5,6,8,[5,6,4]]
console.log(array1);
console.log(array1.flat());

let array2 = [2,5,6,[5,2,6,[5,6,[10,15,20],8]]]
console.log(array2.flat());
    
console.log(array2.flat(2));                // we need flat(2) for 2 level    
console.log(array2.flat(Infinity));         // give flat(Infinity) for unlimited level flat


// Cleaning up Empty Slots also done by flat
let array3 = [1,4,5,,,,,5,6];
console.log(array3.flat(Infinity));