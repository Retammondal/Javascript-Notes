// --------------------------------------------------------------------------------- 
// Setting Data Attributes
// --------------------------------------------------------------------------------- 
// ().dataset.CameCase = "Value"
//              JavaScript (camelCase) ↔ HTML (kebab-case)
par = document.querySelector("#parent-div > p")
console.log(par);
par.dataset.helloGello = "Hii"          // data-hello-gello = "hii"
console.log(par);
par.dataset.userName = "Retam";   // data-user-name
console.log(par);

// --------------------------------------------------------------------------------- 
// Reading Data Attributes Values
// --------------------------------------------------------------------------------- 
// ().dataset.CameCase

console.log(par.dataset.helloGello);
console.log(par.dataset.helloGellos);       // undefined