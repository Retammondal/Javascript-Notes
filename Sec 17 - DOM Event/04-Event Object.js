// ------------------------------------------------------------------------------------------------------
// Part 1: The Event Object
// ------------------------------------------------------------------------------------------------------
// When an event occurs, the browser automatically passes an Event Object to the event handler function.
// This object contains incredibly valuable information about the event that just happened.


// ------------------------------------------------------------------------------------------------------
// Part 2: Common Properties of the Event Object
// ------------------------------------------------------------------------------------------------------
// 💡 Note: 'event' is almost always abbreviated as 'e' in professional codebases.
// (Otherwise we can give any name)

btn.addEventListener('click', function(e) {
    console.log(e);                                 // Logs the full PointerEvent/MouseEvent object

    // 1. Core Properties
    console.log(e.type);                            // Output: "click" (The type of event triggered)
    console.log(e.target);                          // The EXACT element that was clicked
    console.log(e.currentTarget);                   // The element where the listener is attached

    // 2. Mouse Position (Relative to Viewport/Window)
    console.log(e.clientX);                         // X-coordinate relative to the visible window
    console.log(e.clientY);                         // Y-coordinate relative to the visible window
    
    // 3. Mouse Position (Relative to the Element itself)
    console.log(e.offsetX);                         // X-coordinate relative to the clicked element
    console.log(e.offsetY);                         // Y-coordinate relative to the clicked element

    // 4. Keyboard Properties (Usually used with 'keydown' / 'keyup' events)
    console.log(e.key);                             // The logical key pressed (e.g., "A", "Enter")
    console.log(e.code);                            // The physical keyboard key (e.g., "KeyA")
    console.log(e.shiftKey);                        // Boolean: Was the Shift key held down? true/false
    console.log(e.ctrlKey);                         // Boolean: Was the Ctrl key held down? true/false
});


// ------------------------------------------------------------------------------------------------------
// Part 3: Example -- Tracking Clicks
// ------------------------------------------------------------------------------------------------------

// Adding a new button dynamically
let btn2 = document.createElement("button");
btn2.textContent = "Track Click";
btnDiv.append(btn2);                                // What is btnDiv? --> Getting from other JS Connected file

// Using the 'e' shorthand to track interaction details
btn2.addEventListener('click', function(e) {
    console.log(`Clicked at Position : X=${e.clientX}, Y=${e.clientY}`);
    console.log(`Clicked on Element  : ${e.target.tagName}`);
    console.log(`Element Text        : ${e.target.textContent}`);
});

