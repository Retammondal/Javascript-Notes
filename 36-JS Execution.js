// Open the JS Executuion .html file in Browser and check how it's running// Debug

var a = 5;
let b =10;
console.log(a+b);


function outer() {
    let num1 = 10;
    let num2 = 20;
    var a = "HII";
    
    function inner() {
        let num1 = 50;
        let num2 = 60;
        return num1 + num2;
    }

    const result = inner() + num1 + num2;

    return result;
}

const result = outer();
console.log(result);


// Example
// fun2()

var fun2 = function() {
    console.log("Hello");
}

