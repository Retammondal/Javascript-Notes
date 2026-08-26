// for...in loop is specifically designed to iterate over all enumerable keys (property names) of an object

// Sample Object
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

    grade(){                     
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

// If i want to take all the keys..
for (let i in studentProfile){
    console.log(i);
}
// If i want to take all the values..
for (let j in studentProfile){
    console.log(`Key is ${j} and Value is ${studentProfile[j]}`);
}
console.log("--------------------------------------------------------------------------------------");

// For Arrays
let tools = ['Git', 'Docker', 'Vim'];
for (i in tools){
    console.log(i);
}
// It will output all the indexes