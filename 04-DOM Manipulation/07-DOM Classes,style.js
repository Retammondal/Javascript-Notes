// ().classList --> has multiple properties
// -- give list of all classes

// ().classList.add("Class1","Class2",...)
// ().classList.remove("Class1","Class2",...)
// ().classList.replace("oldClassName", "NewClassName")           
// ().classList.toggle("className")         --> if className not present add, if present remove

par = document.querySelector("#parent-div > p")
par.classList.add("hello1", "hello2")
par.classList.remove("hello1")
console.log(par.classList);
par.classList.toggle("toggleClass")
console.log(par.classList);

// --------------------------------------------------------------------------------- 
// style Object
// --------------------------------------------------------------------------------- 
// Directly manipulate inline styles using the style property.
// CamelCase
par.style.borderRadius = "10px"
// par.style.border-radius = "10px" -- NO!

// NOTE : THis is not recommended...use class and edit in css