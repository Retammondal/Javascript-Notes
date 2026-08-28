// Loops -- repeating of same code blocks with condition
// Iteration -- Repeating a block of code

// for Loop -- exactly how many times want code to repeat
// for (initialization; condition; afterthought){}
// Standard syntax
for (let i = 0; i < 5; i++) {
  console.log("The number is: " + i);
}

// Optional Structure: Initialization outside
let count = 0;
for (; count < 3; count++) {
  console.log("Count is: " + count);
}
// Dont use var(leaks data) / const(no updation) -- always use let in for loop initialization

console.log("----------------------------------------------------------");

// while Loop -- loop which check condition before running the loop
// relies entirely on External variable based on Condition
let count2 = 1; // Initialization happens outside

while (count2 <= 3) { // Condition
  console.log("Number: " + count2);
  count2++; // CRITICAL: Updation happens manually inside!
}

// NOTE: UPdation giving must, otherwise loop goes in Infinite Loop

console.log("----------------------------------------------------------");

// do while Loop -- same as while loop just condition given at last
// loop runs at least one irrespective of condition true or false

let count3 = 1; // Initialization happens outside

do { 
  console.log("Number: " + count3);
  count3++; // CRITICAL: Updation happens manually inside!
}
while (count3 <= 0); // condition given at last

// Condition here is not satisfying acc. to while loop it should not run
// but in do while it will run once then will stop

console.log("----------------------------------------------------------");

// Loop Controllers -- control loop flow
// break -- emergency exit (Terminates the loop completely irrespective of down codes)
// continue -- skip button (Terminates the current cycle and goes to next cycles skippping below parts)
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips printing 3, jumps straight to i=4
  }
  if (i === 5) {
    break; // Stops the loop entirely before printing 5
  }
  console.log(i); // Output: 1, 2, 4
}