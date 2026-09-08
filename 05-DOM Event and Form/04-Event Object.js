// --------------------------------------------------------------------------------- 
// Event Object
// --------------------------------------------------------------------------------- 
// When an event occurs, the browser automatically passes an event object to the event handler.
// This object contains valuable information about the event.
btnDiv = document.querySelector("#btn-div")
btn = document.querySelector("#btn")


// --------------------------------------------------------------------------------- 
// Common Properties of Event Object
// --------------------------------------------------------------------------------- 
btn.addEventListener('click', function(event){
    console.log(event);         // Full Event Object
    console.log(event.type);         // Type of Event - click
    console.log(event.target);         // The elements that was clicked
    console.log(event.currentTarget);         // Elements where listener attached to
    // Mouse Position
    console.log(event.clientX);     // X coordinate relative to viewport
    console.log(event.clientY);     // Y coordinate relative to viewport
    // Mouse position relative to the element
    console.log(event.offsetX);
    console.log(event.offsetY);
    // Keyboard properties (for keyboard events)
    console.log(event.key); // The key that was pressed
    console.log(event.code); // The physical key code
    console.log(event.shiftKey); // Was Shift key pressed?
    console.log(event.ctrlKey); // Was Ctrl key pressed?
})

// --------------------------------------------------------------------------------- 
// Example -- Tracking Clicks
// --------------------------------------------------------------------------------- 
// NOTE: event ~~ e

// adding a new button
let btn2 = document.createElement("button")
btn2.textContent = "Track Click"
btnDiv.append(btn2)

btn2.addEventListener('click',function(e){
    console.log(`Clicked on Position : ${e.clientX}, ${e.clientY}`);
    console.log(`Clicked on : ${e.target.tagName}`);
    console.log(`Element Text : ${e.target.textContent}`);
})