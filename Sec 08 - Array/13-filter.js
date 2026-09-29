// Filter takes array input of n length
// returns new array 0-n length depend on condition
// return the Statement is Must..
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
    {
        name: "Rishita",
        marks: 95
    },
    {
        name: "Priti",
        marks: 55
    },
    {
        name: "Prashima",
        marks: 49
    },
]

// -----------------------------------------------------------------------------
// Problem --> Want Student Failed <60 ??
// -----------------------------------------------------------------------------

// Method 01 -- forEach

let failedStudents1 = [];

students.forEach(student => {
    if(student.marks<60){
        failedStudents1.push(student)
    }
})

// Method 02 -- Filter (Mentos Zindagi)

const failedStudents2 = students.filter(student => student.marks<60)
const failedStudents3 = students.filter(function(student){
    return student.marks<60;
})

console.log();
console.log("Using For Each", failedStudents1);
console.log('Using Filter', failedStudents2);
console.log('Using Filter', failedStudents3);

console.log("----------------------------------------------------------");

// if you notice in filter you give the condition not statement
// i.e., condition true / false, if true the result will be shown
// but in map we dont give condition we give statement what to print/ task to do
// what if we give such condition in map -- will give true/ false
const conditionOnMap = students.map(student => student.marks<60);
console.log('Giving condition on Map like filter',
    conditionOnMap);

console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// Filtering Falsy Values
// -----------------------------------------------------------------------------
// arr.filter(Boolean)

let unfilteredArr = [95, null, 45, undefined, 88];
let filteredArr = unfilteredArr.filter(Boolean)

console.log(filteredArr);


console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// Filter + Map --> What if I want to take only name who get<60 ??
// -----------------------------------------------------------------------------

// Method 01 : First Filter --> Then Use Map
const failedStudentsName1 = failedStudents1.map(value => value.name)
console.log(failedStudentsName1);

// Method 02 : Chaining on Filter.map
const failedStudentsName2 = students.filter(student => student.marks<60).map(student => student.name);
    // first filter done, then on the filtered data, again map done on single line only..
console.log(failedStudentsName2);