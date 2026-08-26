// Destructuring -> quick way to unpack values from arrays or properties from objects into separate variables
// Array Destructuring
let product = ["SHirt","Jeans","Pants"];

const [a,b] = ["SHirt","Jeans","Pants"];
console.log(a);
console.log(b);

let cart = ["Laptop", "Mouse", "Headphones"];
const [part1,part2,part3,part4] = cart;
console.log(part1);
console.log(part2);
console.log(part3);
console.log(part4); // will come undefined

console.log("--------------------------------------------------------------------------------------");
// Object Destructuring
let studentProfile = {
  nameP: "Anuska",
  age: 21,
  isEnrolled: true,
  "is-mad":true
}
// const {nameP, age, isEnrolled, ismad} = studentProfile;
      // wrong !! for Object you have to give exact same keys
const { nameP, age, isEnrolled, "is-mad":ismad} = studentProfile;
console.log(nameP);
console.log(age);
console.log(isEnrolled);
console.log(ismad);

console.log("--------------------------------------------------------------------------------------");

// Array Destructuring Advance
// 1. skipping a part -> use extra commas
const [mac1,,mac3] = cart;
console.log(mac1);
console.log(mac3);
// 2. Rest Element -> use rest operator
const [equip1, ...restequip] = cart;
console.log(equip1);
console.log(restequip);
console.log(...restequip);
      // give ans as spreaded

console.log("--------------------------------------------------------------------------------------");

// Object Destructuring Advance
// here order no matters, as names are fixed
const userProfile = {
  username: "Rishob Mondal",
  email: "rishobmondal@gmail.com",
  age: 14,
  country: "India",
  subject: ["math",'english','bengali']
};
// New variable names + 
// Default Values (given by =), but if present will be override if not will taken that default
const { country = "China",totalMarks = 99, email:personalEmail, ...additionalInfo } = userProfile;
console.log(country);
console.log(personalEmail);
console.log(totalMarks);
console.log(additionalInfo);
// console.log(...additionalInfo);
        // we can't do it for array...we had done it for array though


console.log("--------------------------------------------------------------------------------------");
// Loop Destructuring
// Destructure advance using  for of on array
for (i of Object.entries(studentProfile)){
    console.log(i);
}
// Next level
for ([key,value] of Object.entries(studentProfile)){
    console.log(key, value);
}


