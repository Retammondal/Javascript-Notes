// for in loop -> gives only keys
// for...in loop is specifically designed to iterate over all enumerable keys (property names) of an object

let studentProfile = { name: "Anushka", age: 21, isEnrolled: true };

for(let key in studentProfile){
    console.log(key, studentProfile[key]);
}