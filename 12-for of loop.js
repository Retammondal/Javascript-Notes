// for...of loop iterates directly over the values of an iterable object.


// Iterate over an Array
let tools = ['Git', 'Docker', 'Vim'];
for (let i of tools){
    console.log(i);
    console.log("Is it Okay?");
}
console.log("--------------------------------------------------------------------------------------");
// Iterate over a String (including spaces)
let stringPass = "Retam Mondal"
for (let j of stringPass){
    console.log(`Each letter is printing one by one : ${j}`);
}

console.log("--------------------------------------------------------------------------------------");

// If we dont use this; we have to use basic for method ; will be little hectic
for (i=0; i<tools.length; i++){
    console.log(tools[i]);
    console.log("Is it okay?");
}

console.log("--------------------------------------------------------------------------------------");
// How to use for of on Objects
// By converting to Arrays
let studentProfile = {
  nameP: "Anuska",
  age: 21,
  isEnrolled: true,
  "is-mad":true
}
for (i of Object.keys(studentProfile)){
    console.log(i);
}
for (i of Object.values(studentProfile)){
    console.log(i);
}
for (i of Object.entries(studentProfile)){
    console.log(i);
}
