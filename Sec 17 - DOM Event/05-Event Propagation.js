// ------------------------------------------------------------------------------------------------------
// Part 1: Event Flow Phases (The Lifecycle of an Event)
// ------------------------------------------------------------------------------------------------------
// When an event happens, it travels through the DOM in 3 distinct phases:
// Phase 1: Capturing (Top to Bottom)  -> Travels from the Window down to the target element.
// Phase 2: Target (Reaches Target)    -> The event reaches the actual element that was clicked.
// Phase 3: Bubbling (Bottom to Top)   -> Travels back up from the target to the Window.

let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");
let btn3 = document.querySelector("#btn3");


// ------------------------------------------------------------------------------------------------------
// Part 2: Event Bubbling (The Default Behavior)
// ------------------------------------------------------------------------------------------------------
// By default, all event listeners trigger during Phase 3 (Bubbling).

// outer.addEventListener("click", () => console.log("Outer clicked"));
// inner.addEventListener("click", () => console.log("Inner clicked"));
// btn3.addEventListener("click", () => console.log("Button clicked1"));

// 💡 Output if you click the Button:
// 1. "Button clicked" (Target Phase)
// 2. "Inner clicked"  (Bubbling up...)
// 3. "Outer clicked"  (Bubbling up...)


// ------------------------------------------------------------------------------------------------------
// Part 3: Event Capturing (Top-Down)
// ------------------------------------------------------------------------------------------------------
// You can force an event listener to fire during Phase 1 by passing { capture: true }.

// outer.addEventListener("click", () => console.log("Outer captured"), { capture: true });
// inner.addEventListener("click", () => console.log("Inner clicked"));
// btn3.addEventListener("click", () => console.log("Button clicked"));

// 💡 Output if you click the Button:
// 1. "Outer captured" (Fires first because it intercepts during the Capturing phase down)
// 2. "Button clicked" (Target Phase)
// 3. "Inner clicked"  (Bubbling up...)


// ------------------------------------------------------------------------------------------------------
// Part 4: Stopping Propagation
// ------------------------------------------------------------------------------------------------------
// e.stopPropagation() prevents the event from continuing its journey (stops bubbling or capturing).

outer.addEventListener("click", () => console.log("Outer clicked"));
inner.addEventListener("click", () => console.log("Inner clicked"));

btn3.addEventListener("click", function(e) {
    e.stopPropagation();                                // 🛑 Kills the event right here!
    console.log("Button clicked");
});

// 💡 Output if you click the Button:
// 1. "Button clicked" 
// (The inner and outer click listeners will NEVER fire because the bubble was popped before it 
// could travel upwards!)



