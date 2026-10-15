// ------------------------------------------------------------------------------------------------------
// Part 1: What is Event Delegation?
// ------------------------------------------------------------------------------------------------------
// Event Delegation is the practice of attaching a SINGLE event listener to a Parent element instead 
// of attaching individual listeners to every single Child element (which wastes memory).
// ✅ Huge Benefit: New child elements added dynamically will automatically inherit this event!

let outer2 = document.querySelector("#outer2");
let inner2 = document.querySelector("#inner2");
let btn4 = document.querySelector("#btn3");
let btn5 = document.querySelector("#btn4");
let btn6 = document.querySelector("#btn5");


// ------------------------------------------------------------------------------------------------------
// Part 2: The Problem (Naive Approach)
// ------------------------------------------------------------------------------------------------------
// Instead of adding an event to btn4, btn5, and btn6 separately, we add it to the parent 'outer2'.

outer2.addEventListener("click", function() {
    console.log("Targeted");                            // ❌ PROBLEM: Clicking literally ANYWHERE inside 
                                                        // the div (even empty space) triggers this!
});


// ------------------------------------------------------------------------------------------------------
// Part 3: The Solution (Filtering with e.target)
// ------------------------------------------------------------------------------------------------------
// We use the event object (e.target) to check EXACTLY what was clicked before running our logic.

// Strategy A: Filtering by HTML Tag Name
outer2.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {                // Note: Tag names are always evaluated in UPPERCASE
        console.log("Target Achieved: A button was clicked!");
    }
});

// Strategy B: Filtering by CSS Class Name (✅ Most robust approach)
outer2.addEventListener('click', function(e) {
    if (e.target.classList.contains("btn-class")) {     // Safely checks if the clicked element has the class
        console.log("Target Achieved for Class Button");
    }
});