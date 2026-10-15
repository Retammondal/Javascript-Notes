// --------------------------------------------------------------------------------- 
// Selecting Element from DOM
// --------------------------------------------------------------------------------- 
// document.getElementbyID("#ID")

// document.querySelector("Selector")
// document.querySelector("#ID")
// document.querySelector(".class")
// document.querySelector("attribute")      -- attribute
// document.querySelector("div>p")          -- parent-child relation

// document.querySelectorAll("Selector")
// document.querySelectorAll("#ID")
// document.querySelectorAll(".class")

// NOTE: 
// QuerySelector selects only 1st element 
// QuerySelectorAll selects all element and gives in Nodelist (similar to array)

// --------------------------------------------------------------------------------- 
// QuerySelector -- Selects only 1st
// --------------------------------------------------------------------------------- 

let parentDiv1 = document.querySelector("#parent-div")
// const childDiv1 = document.querySelector("#child-div")
let childDiv1 = document.querySelector("#parent-div>div")
console.log(childDiv1);

// --------------------------------------------------------------------------------- 
// QuerySelectorAll -- Select all and gives in NodeList (Not Array)
// --------------------------------------------------------------------------------- 

const allHeading2 = document.querySelectorAll("h2")
console.log(allHeading2);           // NodeList(4) [h2, h2, h2, h2]
console.log(allHeading2.length);    // will give length of Nodelist

// Iterate through Nodelist
allHeading2.forEach((data,index)=>{
    // console.log(`Heading ${index + 1} : ${data}`);
    console.log(`Heading ${index + 1} : ${data.textContent}`);
})

// Convert NodeList to Array
const allHeading2Arr = Array.from(allHeading2)
console.log(allHeading2Arr);

// Iterate through Array
allHeading2Arr.forEach((data,index)=>{
    // console.log(`Heading ${index + 1} : ${data}`);
    console.log(`Heading ${index + 1} : ${data.textContent}`);
})

// WHY TO Convert to Array ? --> for using map, filter