function introduce(greeting, punctuation) {
    console.log(greeting + ", I'm " + this.name + punctuation);
}

const person = { name: "Retam" };

// call() - arguments passed individually
introduce.call(person, "Hello", "!"); // "Hello, I'm Retam!"

// apply() - arguments passed as an array
introduce.apply(person, ["Hi", "."]); // "Hi, I'm Retam."

// bind() - returns a new function with 'this' bound
const boundIntroduce = introduce.bind(person);
boundIntroduce("Hey", "!!"); // "Hey, I'm Retam!!"

// Partial application with bind
const greetRetam = introduce.bind(person, "Namaste");
greetRetam("."); // "Namaste, I'm Retam."