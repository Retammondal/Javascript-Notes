// split() breaks a string apart at a specified character and returns an array of substrings
// Exactly opposite of join()
// Syntax : string.split(separator, limit); 
//      limit-> how much you want (Default : all)

const text = "Apple,Banana,Orange";

// 1. Split by comma
console.log(text.split(","));                   // ["Apple", "Banana", "Orange"]

// 2. Split by empty string (every character)
const word = "Hello";
console.log(word.split(""));                    // ["H", "e", "l", "l", "o"]

// 3. No separator (whole string as one item)
console.log(text.split());                      // ["Apple,Banana,Orange"]

// 4. Split with limit
console.log(text.split(",", 2));                // ["Apple", "Banana"]
console.log(text.split(",", 1));                // ["Apple"]

// 5. Split by space
const sentence = "Hello world from JavaScript";
console.log(sentence.split(" "));               // ["Hello", "world", "from", "JavaScript"]

// 6. Splitting with regex for flexibility
const text2 = "one, two, three, four";
console.log(text2.split(/\s*,\s*/));            // ["one", "two", "three", "four"]