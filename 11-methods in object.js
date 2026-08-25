// Methods in Objects
// A Method is a function that is stored as a property inside an object
let studentProfile = {
    name: "Anushka",
    age: 21,
    isEnrolled: true,
    "is-mad":true,
    subjects: ["Math", "Science", "Computer"],
    scores: {
        mathMarks: 98,
        scienceMarks: 95
    },
    grade(){                     // Method inside an object (Shorthand Method Syntax)
        return "A+";
    },
            // Method inside an Object (Traditional Property Function Syntax)
            // This Keyword : To access other properties or methods within the same object from inside your method, use the this keyword
    displayTotal: function(){
        return this.scores.mathMarks + this.scores.scienceMarks; 
    },
    character(){
        console.log("She is a Good Girl!");
    }
}
console.log(studentProfile);
console.log(studentProfile.grade());
console.log(studentProfile.displayTotal());
        // *** 
        // console.log(studentProfile.character()); // This will give print of that statement + undefined b/c this print will give nothing
        // Output 
        // She is a Good Girl
        // Undefined

studentProfile.character()
console.log("--------------------------------------------------------------------------------------");

// Add method after Object Creation
studentProfile.fathers_name = function(){
    console.log("Pijush Kanti Mondal");
}
console.log(studentProfile);
studentProfile.fathers_name()

console.log("--------------------------------------------------------------------------------------");
// Math Built in operator was also an example of this Methods in objects
// e.g., Math.power(x,y)
let myMath = {
    power(x,y){
        return x**y;
    }
} 
console.log(myMath.power(2,3));
console.log(myMath.power(4,3));