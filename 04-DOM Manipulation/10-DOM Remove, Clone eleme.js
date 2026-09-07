// --------------------------------------------------------------------------------- 
// Removing Element
// --------------------------------------------------------------------------------- 
// parent.removeChild(child);

// want to select #parent-div last child
let parDiv = document.querySelector("#parent-div")
// let selDiv = ("#parent-div").children[0]
let selDiv = (parDiv).lastElementChild
console.log(selDiv);            // <div>
// let par5 = document.querySelector("")

parDiv.removeChild(selDiv)

// --------------------------------------------------------------------------------- 
// Cloning Element
// --------------------------------------------------------------------------------- 
// original.cloneNode(true); // true = deep clone (all children)
// original.cloneNode(false); // false = shallow clone (only the element)

let cloneselDiv = selDiv.cloneNode(false)
console.log('clone false',cloneselDiv);   // inside div elements will not get
cloneselDiv = selDiv.cloneNode(true)
console.log('clone true', cloneselDiv);