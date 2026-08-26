// Array.prototype.forEach() method is a built-in tool
// used to execute a provided function once for each element in an array

// Use: easy to use for getting index values

// Basic Syntax
// array.forEach(function(element, index(Optional), array(Optional)) {
//   // Your code here
// });

let tools = ['Git', 'Docker', 'Vim'];
tools.forEach(function(i,j,k){
    console.log(i, j, k);
})
// 2nd will give by default index value
// 3rd will give by default array

console.log("--------------------------------------------------------------------------------------");
const ranks = ['Gold', 'Silver', 'Bronze'];

ranks.forEach((rank, index) => {
  console.log(`Rank ${index + 1}: ${rank}`);
});
