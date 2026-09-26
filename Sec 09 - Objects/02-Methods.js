// Method -> A Function that belongs to an Object
// this keyword -> To access other Properties in Same Object use this.property

let myMath = {
	subject: "Math",
    name : "Retam",
    power(x, y) {                           // 1. Shorthand Syntax (Recommended)
        return x ** y;
    },
    
    displayMessage: function() {            // 2. Traditional Syntax
        console.log(`${this.subject} is Fun for ${this.name}!`);
    }
};

console.log(myMath.power(2, 3));            // Outputs: 8
console.log(myMath.displayMessage());       // Outputs: Math is Fun!

// ---------------------------------------------------------------------------------------
// Add Method after Object Creation
// ---------------------------------------------------------------------------------------
myMath.father_name = function() {
    console.log(`Father's Name of ${this.name} is Bonshidhar Mondal`);
}

console.log(myMath.father_name());
console.log(myMath);
    // console.log(myMath.father_name()); 
    // This will give print of that statement + undefined b/c this print will give nothing

    // Output 
    // Father's Name of Retam is Bonshidhar Mondal
    // Undefined