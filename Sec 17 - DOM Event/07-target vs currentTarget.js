// ------------------------------------------------------------------------------------------------------
// Part 1: target vs currentTarget (The Core Difference)
// ------------------------------------------------------------------------------------------------------
// When using Event Delegation, events "bubble" up from the child to the parent. 
// Because of this bubbling, we have two distinct elements to track during an event:

// 1. event.target: 
//    WHERE the event started. The EXACT, deepest element the user physically clicked.
//
// 2. event.currentTarget: 
//    WHERE the listener is attached. The element actively running the `.addEventListener`.

// ------------------------------------------------------------------------------------------------------
// Part 2: The HTML Scenario
// ------------------------------------------------------------------------------------------------------
// Imagine this HTML setup where a button has an icon or text span inside it:
//
// <div id="outer2">
//     <button class="btn-class">
//         <span>Click Me!</span>  <-- What happens if they click the text instead of the button edge?
//     </button>
// </div>


// ------------------------------------------------------------------------------------------------------
// Part 3: Seeing the Difference in Action
// ------------------------------------------------------------------------------------------------------

outer2.addEventListener('click', function(e) {
    
    // SCENARIO: The user clicks directly on the word "Click Me!" (the <span>).

    console.log("Target:", e.target); 
    // 👉 Outputs: <span>Click Me!</span>
    // 💡 WHY? Because `e.target` is the literal element the mouse touched. 

    console.log("Current Target:", e.currentTarget); 
    // 👉 Outputs: <div id="outer2">...</div>
    // 💡 WHY? Because `e.currentTarget` is ALWAYS the element that owns the `addEventListener`.

});