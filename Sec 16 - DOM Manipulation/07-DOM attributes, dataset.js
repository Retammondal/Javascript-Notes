// ().setAttribute(attributeName, property)
// ().getAttribute(attributeName)           --> return null if not present
// ().removeAttribute(attributeName)

// --------------------------------------------------------------------------------- 
// setAttribute
// --------------------------------------------------------------------------------- 
// set style attribute
let par = document.querySelector("#parent-div > p")
console.log(par);
par.setAttribute("style", "background-color: pink; font-size: 18px")

// set any attribute
par.setAttribute("customAtt", "my-doc")

// --------------------------------------------------------------------------------- 
// getAttribute & removeAttribute
// --------------------------------------------------------------------------------- 
console.log(par.getAttribute("style"));
console.log(par.getAttribute("customAtt"));
console.log(par.getAttribute("hello"));

par.removeAttribute("customAtt")


// --------------------------------------------------------------------------------- 
// Checking Attribute
// --------------------------------------------------------------------------------- 
// ().hasAttribute(...)     --> true/ false

console.log(par.hasAttribute("customAtt"));
console.log(par.hasAttribute("style"));

// --------------------------------------------------------------------------------- 
// Get all Attribute
// --------------------------------------------------------------------------------- 
// ().attributes
const attNodeList = par.attributes
console.log(attNodeList);

// --------------------------------------------------------------------------------- 
// Setting Data Attributes
// --------------------------------------------------------------------------------- 
// ().dataset.cameCase = "Value"
//              JavaScript (camelCase) ↔ HTML (kebab-case)
par = document.querySelector("#parent-div > p")
console.log(par);
par.dataset.helloGello = "Hii"          // data-hello-gello = "hii"
console.log(par);
par.dataset.userName = "Retam";   // data-user-name
console.log(par);

// Note: We can do this using Normal Attributes also
par.setAttribute("data-user-name","Retam Mondal")

// --------------------------------------------------------------------------------- 
// Reading Data Attributes Values
// --------------------------------------------------------------------------------- 
// ().dataset.CameCase

console.log(par.dataset.helloGello);
console.log(par.dataset.helloGellos);       // undefined