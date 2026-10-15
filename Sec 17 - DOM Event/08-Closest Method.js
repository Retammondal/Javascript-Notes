// ------------------------------------------------------------------------------------------------------
// Part 1: The .closest() Method Basics
// ------------------------------------------------------------------------------------------------------
// The .closest() method finds the closest ancestor element that matches a specific CSS selector.
// Syntax: element.closest("selector")
// Note: It starts by checking the element itself, then traverses UP the DOM tree.

let btn6closbutt = btn6.closest("button");
console.log(btn6closbutt);                              // Returns the button itself (it is a match!)

let btn6closDiv = btn6.closest("div");
console.log(btn6closDiv);                               // Returns the closest parent <div>

let btn6closH2 = btn6.closest("h2");
console.log(btn6closH2);                                // Output: null. It ONLY searches ancestors, 
                                                        // it does NOT find siblings of ancestors!


// ------------------------------------------------------------------------------------------------------
// Part 2: The "Target Gotcha" in Event Delegation
// ------------------------------------------------------------------------------------------------------
// <div id="outer2">
//     <button class="btn-class">
//         <span>Click Me!</span>  <-- What happens if they click the text instead of the button edge?
//     </button>
// </div>

// ❌ The Flaw with basic tag filtering:
// If you use `if (e.target.tagName === "BUTTON")`, it will FAIL if the user clicks a nested <span> 
// or an <img> inside the button. The e.target becomes "SPAN", not "BUTTON"!

// ✅ The Bulletproof Solution: Use .closest()
// .closest() starts at e.target and traverses up, ensuring we catch the button click no matter what 
// internal child element was actually clicked.

outer2.addEventListener('click', function(e) {
    
    // Find the closest parent with the class 'btn-class', starting from whatever was clicked
    let clickedButton = e.target.closest('.btn-class');

    // If a button was found AND that button is actually inside our outer2 container
    if (clickedButton && outer2.contains(clickedButton)) {
        
        console.log("Successfully clicked the button or something inside it!");
        console.log("The Button Element:", clickedButton);
        
    }
});