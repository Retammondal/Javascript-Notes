// --------------------------------------------------------------------------------- 
// Event Flow
// --------------------------------------------------------------------------------- 
// Phase 1 : Capturing(Top to Buttom) >> 
// Phase 2 : Target (Reaches to Target) >>
// Phase 3 : Bubbling (Buttom to Top)

let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");
let btn3 = document.querySelector("#btn3");

// By default, events bubble (Phase 3)
// outer.addEventListener("click", () => console.log("Outer clicked"));
// inner.addEventListener("click", () => console.log("Inner clicked"));
// btn3.addEventListener("click", () => console.log("Button clicked"));

// Click on Button 
// Button clicked > Inner Clicked > Outer Clicked

// --------------------------------------------------------------------------------- 
// Event Flow -- Capturing Phase
// --------------------------------------------------------------------------------- 
// outer.addEventListener("click", () => console.log("Outer clicked"), {capture:true});
// inner.addEventListener("click", () => console.log("Inner clicked"));
// btn3.addEventListener("click", () => console.log("Button clicked"));

// Click on Button
// Outer Captured > Button Clicked > Inner Clicked

// --------------------------------------------------------------------------------- 
// Event Flow -- Stopping Propagation
// --------------------------------------------------------------------------------- 
// Stops the event from bubbling up
outer.addEventListener("click", () => console.log("Outer clicked"));
inner.addEventListener("click", () => console.log("Inner clicked"));
btn3.addEventListener("click", function(e) {
    e.stopPropagation();    // will stop the propagation here
    console.log("Button clicked");
});