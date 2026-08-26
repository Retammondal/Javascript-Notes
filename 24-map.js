// Map -- Method work on Array
// array input n legnth, return array n length
// why map? -- to edit each and every elem in array and return new (using a function obviously)
let originalPrices = [52,59,64,96,310,256];

// making all original prices decimal 2
originalPrices.forEach(function(i,j){
    originalPrices[j] = i.toFixed(2)
})

let discountedPrices =[]
// want discount price of 10% on all original prices

// How to do it?
// Method 01
for (value of originalPrices){
    let discount = (value * 0.9).toFixed(2)
    discountedPrices.push(discount)
}


console.log('originalprices',originalPrices);
console.log('discountPrices using for of',discountedPrices);

// Method 02
let discountedPrices2 = []
originalPrices.forEach(value =>{
    let discount = (value * 0.9).toFixed(2)
    discountedPrices2.push(discount)
})

console.log('discountPrices using foreach',discountedPrices2);

// Method 03 --> Map (Easiest)
// NOte: Map itself create / return new array, no  need to create new array..
// Using Map (TYpe 1)

const discountedPrices3 = originalPrices.map(value => (value * 0.9).toFixed(2));

console.log("discountPrices using Map type 01",discountedPrices3);

// Using Map (TYpe 2)
const discountedPrices4 = originalPrices.map(function(value){
    let discount = (value * 0.9).toFixed(2)
    return discount
})
console.log("discountPrices using Map type 02", discountedPrices4);

console.log("--------------------------------------------------------------------------------------");

// Example
// Array Of Objects
let students = [
    {
        name: "Retam",
        marks: 99
    },
    {
        name: "Rishob",
        marks: 95
    },
    {
        name: "Anuchka",
        marks: 96
    },
]

// want to get student names 
console.log('Example');
let studentNames1 = [];

students.forEach(value=> studentNames1.push(value.name));
console.log('Student names fetch using for each',studentNames1);

const studentNames2 = students.map(value => value.name);
console.log('Student names fetch using map', studentNames2);

// want to add 10 marks in each
const updatedStudents = students.map((value)=>{
    return {...value, marks:value.marks +10}
    // using spread operator override concept
})
console.log('Added 10 marks each to actual Array : ',
    updatedStudents);
