// ------------------------------------------------------------------------------------------------------
// Part 1: DOM Events & Adding Listeners
// ------------------------------------------------------------------------------------------------------
// Event: An action or occurrence in the browser that JavaScript can "listen" for and respond to.
// Syntax: element.addEventListener(eventType, callbackFunction, options);

let btnDiv = document.querySelector("#btn-div");
let btn = document.querySelector("#btn");

// Method 1: Named Function (✅ Recommended for reusability & removal)
function handleClick() {
    console.log("Button Clicked");
    btnDiv.lastElementChild.classList.toggle("hidden");         // 'hidden' is a class to Hide it
}
btn.addEventListener('click', handleClick);

// Method 2: Anonymous Function
btn.addEventListener('click', function() {
    console.log("Kaisa Laga Mera Maazak");
});

// Method 3: Arrow Function
btn.addEventListener('click', () => {
    console.log("Kaisa Laga Firse Mera Maazak");
});


// ------------------------------------------------------------------------------------------------------
// Part 2: Removing Events (The Reference Rule)
// ------------------------------------------------------------------------------------------------------
// ❌ This WON'T work. Even though the code looks identical, they are two DIFFERENT function references 
// in memory. removeEventListener cannot find the original anonymous function to remove it.
/*
btn.addEventListener('click', function() { console.log("Added Events"); });
btn.removeEventListener('click', function() { console.log("Added Events"); });
*/

// ✅ This WORKS. You MUST pass the exact same named function reference to remove it!
function addEvent() {
    console.log("Added Events");
}
btn.addEventListener('click', addEvent);
btn.removeEventListener('click', addEvent);


// ------------------------------------------------------------------------------------------------------
// Part 3: Event Listener Options
// ------------------------------------------------------------------------------------------------------
// { once: true } - The event listener runs exactly once, then automatically removes itself.

btn.addEventListener("click", function(e) {
    console.log("This runs only once!");
}, { once: true });
// If you click again - nothing happens!


// ------------------------------------------------------------------------------------------------------
// Part 4: Custom Removal After 'N' Times
// ------------------------------------------------------------------------------------------------------

let counter = 1;

function counterListener() {
    if (counter <= 3) {
        console.log(`Runs ${counter} time(s)`);
        counter++;        
    } else {
        // Once the counter exceeds 3, we manually remove the listener so it stops firing!
        btn.removeEventListener('click', counterListener);
    }
}

btn.addEventListener('click', counterListener);