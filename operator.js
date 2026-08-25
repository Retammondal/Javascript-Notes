// Operators
// Arithmetic Operator
let num1 = 3
let num2 = 5
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
num1++; // it's actually num1 = num1 + 1
++num1 
console.log(num1);
// Pre-Inccreemnt
console.log(++num1);
// Post-Increment
console.log(num1++);
console.log(num1);
console.log(num1+=2);


// Assignment operator
let num = 2 // = is assignment opereator
num ++;
num+=2;
console.log(num);

//Comparison Operator
console.log("5" == 5);
console.log("5" === 5);

// Nested If
const isLoggedIn = true;
const isSubscribed = true;

if(isLoggedIn){
    if(isSubscribed) {
        console.log("You can access Premium Content")
    } 
    else{
        console.log("You dont have Premium plan to access this...")
    }
}
else{
    console.log("Please Log in to continue..");
    
}

age = 19
let access = (age>18)? "Allowed" : "Denied";
console.log(access);
