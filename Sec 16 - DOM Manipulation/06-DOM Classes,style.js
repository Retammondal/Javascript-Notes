
// --------------------------------------------------------------------------------- 
// Playing with HTML Class
// ---------------------------------------------------------------------------------
// ().classList.method --> method to manipulate Classes

// ().classList.add("Class1","Class2",...)
// ().classList.remove("Class1","Class2",...)
// ().classList.replace("oldClassName", "NewClassName")           
// ().classList.toggle("className")         
//      --> if className not present add, if present remove

par = document.querySelector("#parent-div > p")
par.classList.add("hello1", "hello2")
par.classList.remove("hello1")
par.classList.toggle("toggleClass")
par.classList.replace("hello2", "hello3")

// --------------------------------------------------------------------------------- 
// Checking Element has a class
// ---------------------------------------------------------------------------------
// ().classList                     --> Gives all the Classes present
// ().classList.contains(className) --> True/False

console.log(par.classList);
console.log(par.classList.contains("hello2"));

// --------------------------------------------------------------------------------- 
// Style Attribute Edit
// --------------------------------------------------------------------------------- 
// Directly manipulate inline styles using the style property.
// CamelCase
// NOTE: This only gets styles set inline!
// It won't get styles from CSS classes or external stylesheets

// NOTE : THis is not recommended...use class and edit in css

par.style.borderRadius = "10px"         // par.style.border-radius = "10px" -- NO!
par.style.backgroundColor = "red";      // CSS: background-color
par.style.fontSize = "30px";            // CSS: font-size
par.style.color = "white";
par.style.borderRadius = "10px";
par.style.padding = "20px";
par.style.marginTop = "50px";           // CSS: margin-top

// Getting styles (only inline styles!)
console.log(par.style.backgroundColor); // "red"
console.log(par.style.fontSize);        // "30px"

