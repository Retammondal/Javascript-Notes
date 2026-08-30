// Reduce on array of n length 
// returns single value (number, boolean, object, array)

let marks = [56,58,96,41,52];
console.log('Marks Given :', marks);
// want total marks

// Method 01 - Basic using for each
let totalMarks1 = 0; // intialization
marks.forEach(mark => totalMarks1+=mark);
console.log('Get Total Marks using for each - ', totalMarks1);

// total marks is a single value of integer type
// .reduce(callback Function, accumulator)

// const totalMarks2 = marks.reduce((accumulator, currentValue, index) => {},0)
const totalMarks2 = marks.reduce((accumulator, currentValue) => {
    // return accumulator = accumulator + currentValue
    return accumulator += currentValue
},0)
console.log('Get Total Marks using reduce - ', totalMarks2);

console.log("--------------------------------------------------------------------------------------");
// example
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

// want all student marks total
const totalStudentMarks = students.reduce((total,student) =>{
    return total += student.marks
},0)
console.log('Total Marks of all students : ', totalStudentMarks);

console.log("--------------------------------------------------------------------------------------");

// example
const attendance = ["present", "present", "absent" , "present", "present", "absent"]
// want output like {present : 3, absent : 2}

// Method 01
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
// const tracker2 = attendance.reduce((acc, value)=>{},{})
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
    acc[value] = (acc[value] || 0) + 1;
    return acc
},{})
console.log('Attendance tracking using Reduce 02 -', tracker3);

const tracker4 = attendance.reduce((acc, value)=>{
    acc[value] += 1
    return acc
},{present:0, absent:0})
console.log('Attendance tracking using Reduce 03 -', tracker4);