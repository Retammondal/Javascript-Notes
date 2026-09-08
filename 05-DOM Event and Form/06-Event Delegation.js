// --------------------------------------------------------------------------------- 
// Event Delegation
// --------------------------------------------------------------------------------- 
// Attach Event Listener to Parent rather than children
// Use : ✅ New items added work automatically same events!
let outer2 = document.querySelector("#outer2");
let inner2 = document.querySelector("#inner2");
let btn4 = document.querySelector("#btn3");
let btn5 = document.querySelector("#btn4");
let btn6 = document.querySelector("#btn5");

// Instead of giving events to each button, i will give to parent
outer2.addEventListener("click",function(){
    console.log("Targeted");
})
// ❌ Problem : Wherever i will click inside the div it will trigger
outer2.addEventListener('click',function(e){
    if (e.target.tagName === "BUTTON"){
        console.log("Target Achieved");
    }
})
outer2.addEventListener('click',function(e){
    if (e.target.classList.contains("btn-class")){
        console.log("Target Achieved for Class Button");
    }
})