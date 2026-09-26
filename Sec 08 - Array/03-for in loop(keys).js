// ---------------------------------------------------------------------
// Looping over Array
// ---------------------------------------------------------------------
// for in loop will give keys value --> index
// key -> will give key
// value -> to get value Array[key]

let tools = ['Git', 'Docker', 'Vim'];
for (let key in tools){
    console.log(key, tools[key]);
}

// ---------------------------------------------------------------------
// Looping over String
// ---------------------------------------------------------------------
let stringPass = "Retam Mondal";
for (let keyStr in stringPass){
    console.log(keyStr,"--", stringPass[keyStr]);
}