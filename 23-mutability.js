// Make Changes in Original Variable
let arr = [4,8,9,3,10,12];
let arrCopy = arr;
arrCopy.pop();

console.log('arr', arr);
console.log('arrCopy', arrCopy);
// we will notice pop removes arr, arrcopy both last element 
// NOTE: here let arrCopy = arr; its not value copy, its reference copy
    // it doesn't creating new memory, its just giving reference

let arrCopy2 = [...arr] // Spread operator
// NOTE: this is not reference copy, its forcefully creating new..
arrCopy2.pop();
console.log('arrCopy2', arrCopy2);
// look first pop is happening in all, but last pop to only arrCopy2