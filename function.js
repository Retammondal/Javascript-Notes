let alokMarks = 46+56+23
let addiMarks = 24+24+42
let karanMarks = 54+26+59
let retamMarks = 99+98+96
console.log("alokMarks", alokMarks);

function totalMarks(marks) {
    console.log(marks);
}
totalMarks(addiMarks)

function add(num1, num2) {
    return num1 + num2; 
}

let result = add(5, 10);
console.log(result); // Output: 15

function calculator(num1,num2,operator){
    // console.log(`${num1}`);
    switch(operator){
        case "+":
            console.log(`${num1} ${operator} ${num2} = `, num1 + num2);
            break;
        case "-":
            console.log(`${num1} ${operator} ${num2} = `, num1 - num2);
            break;
    }
}

calculator(4,5,"-")

function totalMark(mathMarks,scienceMarks){
    return mathMarks+scienceMarks
}

function calPercentage(studentName, mathMarks,scienceMarks){
    let total = totalMark(mathMarks,scienceMarks);
    let percentage = total / 200 *100;
    console.log("Total", total);
    console.log("Percentage", percentage);
}
calPercentage("Retam", 95,99)
let response = calPercentage("Anuchka",98,95); // in this line already print happened...
console.log(response); // it will come undefined, because no return, print already done in previous line...

const sayHello = () => console.log("Hello!");
sayHello()

// Project Discount calculator
// function discal(price,discount){
//     return price * discount /100
// };
let shirtP = 2500;
let disc = 5;
const discal = (price,discount) => price * discount /100;
let discount = discal(shirtP,disc)
console.log(`This Shirt Final Price is ${shirtP+discount}`);

