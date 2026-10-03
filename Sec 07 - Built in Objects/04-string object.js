// STRING OBJECT
// Strings are zero indexed

// Length Property 
// 1. x.length -- no. of characters including spaces
let text1 = "RetAm MONDAL";
console.log(`\nLength of "${text1}" : `, text1.length);

// Accessing Characters
// 1. x.charAt(index) -> accessing character based on zerobased index 
// 2. x.at(index) -> accessing character based on negative index

// Negative index not present in JavaScript; but at(index) specially gives result on negative
console.log(`\nGetting 3rd index result :`, text1.charAt(3));
console.log(`Getting -2nd index result :`, text1.charAt(-2)); // will not get any result
console.log(`Getting -2nd index result :`, text1.at(-2));

console.log("----------------------------------------------------------");

// Searching and Matching -> Case Sensitive
// 1. x.indexOf("..") -> first index of ".." in x; if not get gives -1
// 2. x.includes("..") --> returns true/ false ; .. present in x or not
// 3. x.startsWith("..") --> returns true/ false ; x starts with .. or not
// 3. x.endsWith("..") --> returns true/ false ; x ends with .. or not
let subtext1 = "tam"
let subtext2 = "Am"
console.log(`\nSearch Index of ${subtext1} in ${text1} :`, text1.indexOf(subtext1));
console.log(`Search Index of ${subtext2} in ${text1} :`, text1.indexOf(subtext2));
console.log(`${subtext1} presents in ${text1} or not? :`, text1.includes(subtext1));
console.log(`${subtext2} presents in ${text1} or not? :`, text1.includes(subtext2));
console.log(`${text1} starts with RE or not? :`, text1.startsWith("RE"));
console.log(`${text1} ends with al or not? :`, text1.startsWith("al"));

console.log("----------------------------------------------------------");

// Extracting Portions
// 1. x.slice(start, end) 
//      -> Returns a section of string (Positive + Negative indexing);
//      -> start include, end not include
//      -> default end till last

console.log(`\nGetting Subtexts from (2-6) index of ${text1} :`, text1.slice(2,7));
console.log(`Getting Subtexts from (6-end) index of ${text1} :`, text1.slice(6)); // same as (6,last)
console.log(`Getting Subtexts from (-6 to -5) index of ${text1} :`, text1.slice(-6, -4));
console.log(`Getting Subtexts from (-6 to end) index of ${text1} :`, text1.slice(-6));

console.log("----------------------------------------------------------");

// Modification (Immutability Rule) -- Immutable but can't change older
// 1. x.toLowerCase() / x.toUpperCase() -> Changes Casing
// 2. x.trim() -> Removes invisible spaces
// 3. x.replace(search, replacement) -> replaces the first search only
// 4. x.replaceAll(search, replacement) -> replaces all search only

console.log(`\nMaking Lowercase the ${text1} :`, text1.toLowerCase());
console.log(`Making Uppercase the ${text1} :`, text1.toUpperCase());
// Note: It doesn't change the real one; for that we have to Reassign
text2 = text1.toUpperCase();
console.log(`Changed the ${text1} to Uppercase`, text2);
// Replace
console.log(`Replaced "A" with "a" only at first :`, text2.replace("A","a"));
console.log(`Replaced "A" with "a" everywhere :`, text2.replaceAll("A","a"));

console.log("----------------------------------------------------------");

// Splitting & Padding
// 1. x.split(separator) -> split the string and into array of substrings
// 2. x.padStart(target length, padstart) -> give the start until target length comes 

let text3 = "Retam Akash Rishob Rishita Anushka Aadrika";
let nameArray = text3.split(" ");
console.log(`Splitting the name list: `, nameArray);

// Example
let numArr = [56,58,41,26,34,99];
let newNumArr = []
for (i of numArr){
    // NOte: padStart only works in Strings no on numbers
    j = i.toString(); // convert to string first
    j = j.padStart(3,0);
    j = parseInt(j); // converting to integer again
    newNumArr.push(j);
}
console.log(newNumArr);

