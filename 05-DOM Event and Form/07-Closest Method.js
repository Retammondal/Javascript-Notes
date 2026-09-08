// --------------------------------------------------------------------------------- 
// Closest Method
// --------------------------------------------------------------------------------- 
// The .closest() method finds the closest ancestor element that matches a CSS selector.
// element.closest("")

outer2 = document.querySelector("#outer2");
inner2 = document.querySelector("#inner2");
btn4 = document.querySelector("#btn3");
btn5 = document.querySelector("#btn4");
btn6 = document.querySelector("#btn5");

let btn6closbutt = btn6.closest("button")
console.log(btn6closbutt);
let btn6closDiv = btn6.closest("div")
console.log(btn6closDiv);
let btn6closH2 = btn6.closest("h2")
console.log(btn6closH2);        // null, finds only Ancestor not sibling of Ancestor