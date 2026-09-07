// --------------------------------------------------------------------------------- 
// Getting Childrens
// --------------------------------------------------------------------------------- 
// parent.children              --> Returns a live HTMLCollection of child elements (not text nodes).
// parent.lastElementChild      --> Getting Last Child
parDiv = document.querySelector("#parent-div")
let childparDiv = parDiv.children
console.log(childparDiv);

// Access through Index
let child1stparDiv = parDiv.children[0]
console.log(child1stparDiv);

// last element child getting
let lastchildparDiv = parDiv.lastElementChild
console.log(lastchildparDiv);


// Convert to Array
let childparDivArr = Array.from(childparDiv)