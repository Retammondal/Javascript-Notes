// Reduce on array of n length 
// returns single value (number, boolean, object, array)


let marks = [56,58,96,41,52];
// -----------------------------------------------------------------------------
// Problem --> Want Total Marks ??
// -----------------------------------------------------------------------------
console.log('Marks Given :', marks);

// Method 01 - for Each

let totalMarks1 = 0;                            // intialization
marks.forEach(mark => totalMarks1 += mark);
console.log('Get Total Marks using for each - ', totalMarks1);

// Method 02 - reduce
// .reduce(callback Function, accumulator)
// .reduce((accumulator, currentValue, index)=>{},starting value of the accumulator)

const totalMarks2 = marks.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
},0)
console.log('Get Total Marks using reduce - ', totalMarks2);

console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// Problem --> Want All Students Marks Total ??
// -----------------------------------------------------------------------------
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

const totalStudentMarks = students.reduce((total,student) =>{
    return total += student.marks
},0)
console.log('Total Marks of all students : ', totalStudentMarks);

console.log("----------------------------------------------------------");

// -----------------------------------------------------------------------------
// Problem --> Want Output like {present : 3, absent : 2} ??
// -----------------------------------------------------------------------------

const attendance = ["present", "present", "absent" , "present", "present", "absent"]

// Method 01 - for Each
let tracker1 = {};

attendance.forEach(value=>{
    if (tracker1[value]){
        tracker1[value] +=1
    }
    else {
        tracker1[value] = 1
    }
})
console.log('Attendance tracking using for each -', tracker1);

// Method 02 - by Reduce

const tracker2 = attendance.reduce((acc, value)=>{
    if(acc[value]){
        acc[value] += 1
    }
    else {
        acc[value] = 1
    }
    return acc
},{})
console.log('Attendance tracking using Reduce 01 -', tracker2);


const tracker3 = attendance.reduce((acc, value)=>{
    acc[value] += 1
    return acc
},{present:0, absent:0})
console.log('Attendance tracking using Reduce 02 -', tracker3);