// Find and searching any element from array 
const arr = [2,5,7,8,9,6,3,4,2]

//IndexOf is a method to give index (Immutable)
// if it doesn't find any will give -1
console.log(arr.indexOf(8));
console.log(arr.indexOf(15));

console.log("--------------------------------------------------------------------------------------");

// Array.find(()=>{})
    // find takes a callback function 
    // and finds any ele based on condition 

// Type 1 Writing
let respon = arr.find((value) =>{
    return value === 3;
}
)
console.log(respon);
// it gives first element that satisfies condition 
// if it didn’t get any gives undefined

// Type 2 Writing
let respon1 = arr.find((value) =>{
    if(value >3){
        return value;
    }
})
    // will only give the first > 3 
console.log(respon1);

console.log("--------------------------------------------------------------------------------------");
// Array.findindex(()=>{}) -> it gives index
let responIndex = arr.findIndex((value)=>{
    return value ===3;
})
console.log(responIndex);

console.log("--------------------------------------------------------------------------------------");

// flat -> make all nested array in same array
// Condition : flat() does in 1 level i.e., flat(1) by default
let arr2 = [2,5,6,8,[5,6,4]]
console.log(arr2);
console.log(arr2.flat());

let arr3 = [2,5,6,[5,2,6,[5,6,[10,15,20],8]]]
console.log(arr3.flat());
    // we need flat(2) for 2 level
console.log(arr3.flat(2));
    // give flat(Infinity) for unlimited level flat
console.log(arr3.flat(Infinity));

// Cleaning up empty slots also done by flat
let arr4 = [1,4,5,,,,,5,6];
console.log(arr4.flat(Infinity));