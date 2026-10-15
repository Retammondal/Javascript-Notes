// ------------------------------------------------------------------------------------------------------
// Part 1: Getting Element Children (Ignores text & whitespace)
// ------------------------------------------------------------------------------------------------------
// parent.children          --> Returns a live HTMLCollection of child ELEMENTS only.
// parent.lastElementChild  --> Gets the last child ELEMENT.

let parDiv = document.querySelector("#parent-div");
let childparDiv = parDiv.children;
console.log(childparDiv);

// Access through Index
let child1stparDiv = parDiv.children[0];
console.log(child1stparDiv);

// Getting the last element child
let lastchildparDiv = parDiv.lastElementChild;
console.log(lastchildparDiv);

// Convert HTMLCollection to Array (so you can use array methods like .forEach, .map)
let childparDivArr = Array.from(childparDiv);


// ------------------------------------------------------------------------------------------------------
// Part 2: Getting Child Nodes (Includes text, whitespace & comments)
// ------------------------------------------------------------------------------------------------------
// parent.childNodes        --> Returns a NodeList of ALL child nodes (Elements + Text + Comments).
// parent.lastChild         --> Gets the last node (which might just be a hidden line-break!).

let allNodes = parDiv.childNodes;
console.log(allNodes);                                  // Notice this includes #text (line breaks)

// Access through Index
let firstNode = parDiv.childNodes[0];
console.log(firstNode);                                 // Often a #text node if there is a line-break 
                                                        // right after the parent's opening tag.

// 💡 AI Note: The Core Difference
// - Elements are actual HTML tags (<div>, <p>).     --> Use .children, .firstElementChild, .lastElementChild
// - Nodes are EVERYTHING (tags, spaces, comments).  --> Use .childNodes, .firstChild, .lastChild