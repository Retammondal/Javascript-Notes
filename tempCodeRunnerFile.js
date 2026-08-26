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