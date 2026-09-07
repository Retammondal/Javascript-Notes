// --------------------------------------------------------------------------------- 
// Creating Element
// --------------------------------------------------------------------------------- 
// document.createElement("")
let div2 = document.createElement("div")        // create a blank div
let par2 = document.createElement('p')          // createe a blank p
let btn2 = document.createElement('button')
par = document.querySelector("#parent-div > p")
// till now par2 and div2 is blank and in space

par2.textContent = "Hello, it's a text paragraph.."

// --------------------------------------------------------------------------------- 
// Adding Element
// --------------------------------------------------------------------------------- 
// ().appendChild(Child)
// ().append(Child1,Child2)     -- support multiple
//      Both add element at last..

parentDiv1 = document.querySelector("#parent-div")
// want to add parentdiv1 > div2 > par2, btn
parentDiv1.appendChild(div2)                    // --> append support only one
div2.append(par2, btn2)                // --> append multiple possible
btn2.textContent = "Click"

// ().prepend(child)   --> add at first
let par3 = document.createElement('ul')
par3.innerHTML = `<li>List 1</li>
<li>List 2</li>`

div2.prepend(par3)

// parent.insertBefore(newElement, referenceNode);
let par4 = document.createElement("p")
par4.textContent = "Hello, this will be used in iNsertBefore.."
// let refNode = div2.children[0]   --> 1st element
let refNode = div2.children[2]      //-- want to add before 3rd/index 02 element
// console.log(refNode);
div2.insertBefore(par4, refNode)