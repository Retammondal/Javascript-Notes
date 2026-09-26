// ---------------------------------------------------------------------------------------------
// Function Declaration vs Function Expression 
// ---------------------------------------------------------------------------------------------
// -> Same thing just writing syntax different
// -> Function declaration (hoisted), Function expression is like treating a function like a variable

// Function Declaration (function name() {})
// Function Expression (const name = function() {})

    console.log(mult(5,8,9));
    // console.log(mult2(5,8,9));                   // This will not work...

// ---------------------------------------------------------------------------------------------
// Function Declaration
// ---------------------------------------------------------------------------------------------
function mult(num1,num2,num3){                  // proper function 
    return num1*num2*num3;
}

// ---------------------------------------------------------------------------------------------
// Function Expression 
// ---------------------------------------------------------------------------------------------

const mult2 = function(num1,num2,num3){         // Function name -> mult2
    return num1*num2*num3;    
}
const mult3 = function multiplication(num1, num2, num3){    // Function name -> multiplication
    return num1 * num2 * num3;
}

// Only accessable below this line
console.log(mult(4,5,6));
console.log(mult2(10,8,5)); 
console.log(mult3(10,8,5)); 

console.log(mult2);         // [Function: mult2]
console.log(mult3);         // [Function: multiplication]


