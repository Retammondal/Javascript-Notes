// Map -- Method work on Array
// array input n legnth, return array n length
// why map? -- to edit each and every elem in array and return new (using a function obviously)

let originalPrices = [52,59,64,96,310,256];
// -----------------------------------------------------------------------------
// Problem --> Want discount price of 10% on all original prices??
// -----------------------------------------------------------------------------
// Method 01 : for of

const discountedPrices1 =[]

for (value of originalPrices){
    let discount = (value * 0.9).toFixed(2)
    discountedPrices1.push(discount)
}


// Method 02 : forEach

const discountedPrices2 = []
originalPrices.forEach(value =>{
    let discount = (value * 0.9).toFixed(2)
    discountedPrices2.push(discount)
})


// Method 03 --> Map (Easiest)
// NOte: Map itself create / return new array, no need to create new array..
// return in must in map function (Arrow Function/ Normal Function)

const discountedPrices3 = originalPrices.map(value => (value * 0.9).toFixed(2));



const discountedPrices4 = originalPrices.map(function(value){
    let discount = (value * 0.9).toFixed(2);
    return discount;            // return must
})

console.log(`Original Price :`, originalPrices);
console.log(`Discount Price 1 :`, discountedPrices1);
console.log(`Discount Price 2 :`, discountedPrices2);
console.log(`Discount Price 3 :`, discountedPrices3);
console.log(`Discount Price 4 :`, discountedPrices4);

console.log("----------------------------------------------------------");

// -------------------------------------------------------------------------------------------
// {Array of Objects} Problem --> Want to get student names ?? + Want to add 10 marks in each
// -------------------------------------------------------------------------------------------

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


console.log('Example');

const studentNames = students.map(value => value.name);

console.log('Student names fetch using map', studentNames);

const updatedStudents = students.map((value)=>{
    return {...value, marks:value.marks +10};       // using spread operator override concept
})
console.log('Added 10 marks each to actual Array : ',
    updatedStudents);
