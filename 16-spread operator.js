// Spread and Rest Operator
// Spread

// Spread with Arrays

let arr = [53,52,7,56,85,2,36,54]
console.log(Math.min(arr));
// will give NaN b/c they are in packed situation (array)
// Spread will unbox/unpack them

console.log(arr);
console.log(...arr); // You will notice all will be unboxed
console.log(Math.min(...arr));

console.log("--------------------------------------------------------------------------------------");
// Merging
let c = [2,4];
let d = [4,6];
// How to merge them
let e = c+d
let f = [c,d]
console.log(e); // Output will be 2,44,6
console.log(f); // Output will be Nested Array
let g = [...c, ...d]
console.log(g);

// Adding Elements
let h = [1,...g , 8]
console.log(h);
console.log("--------------------------------------------------------------------------------------");

// Spread with Objects
let obj1 = {
    name : "Retam",
    age : 16
}
// console.log(...obj1);
// This is not possible why? because JavaScript objects are not iterable

let obj2 = {
    phone : "Poco M6 Pro",
    laptop : "Asus Vivobook S14"
}
let myObj = {...obj1, ...obj2}
console.log(myObj);

console.log("--------------------------------------------------------------------------------------");

// Spread with String
let str = "RETAM MONDAL"
console.log(...str);
console.log([...str]);