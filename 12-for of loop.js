// for...of loop iterates directly over the values of an iterable object.


// Iterate over an Array
let tools = ['Git', 'Docker', 'Vim'];
for (let i of tools){
    console.log(i);
    console.log("Is it Okay?");
}

// Iterate over a String (including spaces)
let stringPass = "Retam Mondal"
for (let j of stringPass){
    console.log(`Each letter is printing one by one : ${j}`);
}