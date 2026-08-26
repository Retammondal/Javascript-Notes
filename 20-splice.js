// Splice -- add, delete, replace in array
let arr = [2,4,5,6,8]
// we have shift, push,pop, unshift -> for add / remove first and last element but what about middle anyone

arr[3] = null; 
// will it work? -- no that ele will be null not will be deleted
console.log(arr);

// Just lke pop, push - slice is a Method

// Deleting Element
// .splice(startIndex, deleteCount)
arr.splice(3,1);
console.log(arr);

arr.splice(1,2);
console.log(arr);

// Adding Element
// .splice(startIndex, 0, add element1, add element2,..)
arr.splice(1,0,"HEllo","HELlo 2");
console.log(arr);

// Replacing Element
// .splice(startIndex, deleteCount, add element1, add element2,...)
arr.splice(1,2, "Retam")
console.log(arr);

//NOTE : SPlice is Mutable, result updated in old varible