// ------------------------------------------------------------------------------------------------------
// Part 1: Creating Elements
// ------------------------------------------------------------------------------------------------------
// document.createElement("tag") creates a new node in memory, but it is NOT in the DOM (page) yet.

let div2 = document.createElement("div");               // Creates a blank <div>
let par2 = document.createElement("p");                 // Creates a blank <p>
let btn2 = document.createElement("button");            // Creates a blank <button>

par2.textContent = "Hello, it's a text paragraph..";    // Adds text, but it's still just floating 
                                                        // in memory until we append it!


// ------------------------------------------------------------------------------------------------------
// Part 2: Adding Elements to the DOM
// ------------------------------------------------------------------------------------------------------

let parentDiv1 = document.querySelector("#parent-div");

// 1. appendChild() vs append() -> Both add to the END (bottom) of the parent.
parentDiv1.appendChild(div2);                           // appendChild() ONLY supports one element
        
div2.append(par2, btn2);                                // append() supports MULTIPLE elements at once
btn2.textContent = "Click";

// 2. prepend() -> Adds to the BEGINNING (top) of the parent.
let par3 = document.createElement('ul');
par3.innerHTML = `<li>List 1</li><li>List 2</li>`;
div2.prepend(par3);                                     // Injects the <ul> as the very FIRST child of div2

// 3. insertBefore(newElement, referenceNode) -> Adds exactly before a specific sibling.
let par4 = document.createElement("p");
par4.textContent = "Hello, this will be used in insertBefore..";
        
let refNode = div2.children[2];                         // Selects the 3rd child (index 2) as reference
div2.insertBefore(par4, refNode);                       // Injects par4 directly above refNode


// ------------------------------------------------------------------------------------------------------
// Part 3: Removing Elements
// ------------------------------------------------------------------------------------------------------
        
let parDiv = document.querySelector("#parent-div");
let selDiv = parDiv.lastElementChild;                   // Targets the very last child inside parent
console.log(selDiv);
        
// Traditional way (Requires selecting the parent first)
parDiv.removeChild(selDiv);

// 💡 AI Note: Modern JS allows you to remove elements directly without needing the parent!
// You can simply call: selDiv.remove();


// ------------------------------------------------------------------------------------------------------
// Part 4: Cloning Elements
// ------------------------------------------------------------------------------------------------------
        
// 1. Shallow Clone (false) -> Copies ONLY the outer element, ignoring all text/children inside.
let shallowClone = selDiv.cloneNode(false);
console.log('clone false:', shallowClone);              // The <div> is copied, but it is completely empty
        
// 2. Deep Clone (true) -> Copies the element AND exactly everything inside it (text, children).
let deepClone = selDiv.cloneNode(true);
console.log('clone true:', deepClone);                  // The <div> and all its contents are duplicated