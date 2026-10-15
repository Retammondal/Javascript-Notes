// ------------------------------------------------------------------------------------------------------
// Part 1: Form Submission & preventDefault()
// ------------------------------------------------------------------------------------------------------
// ❌ Misconception: Beginners attach the event to the submit button. You MUST attach it to the <form>!

const form = document.querySelector("#form");
const username = document.querySelector("#name");       // Name input -> #name id is given
const bio = document.querySelector("#bio");             // Bio input  -> #bio id is given

form.addEventListener("submit", (e) => {
// 1. STOP the page from refreshing! 
    // Browser generally Refreshes when clicked on Submit Button & JS variables are destroyed
    // We use e.preventDefault() --> tells the browser, "Don't do what you usually do when this happens."
    // Browser stop Default Refreshing on Click on Submit....
    e.preventDefault(); 
    
// 2. Grab the actual typed text using .value from Input tag
    const nameVal = document.querySelector("#name").value;
    
// 3. Grabbing just the element (we forgot to add .value here!)
    const email = document.querySelector("#email");
    const passw = document.querySelector("#passw"); 

    // 4. ES6 Object Shorthand: { nameVal } automatically creates a key-value pair of nameVal: "text".
    // For the others, we map the key to the element's .value manually.
    console.log({
        nameVal, 
        email: email.value, 
        password: passw.value
    });
});


// ------------------------------------------------------------------------------------------------------
// Part 2: Real-Time Character Counter (The 'input' Event)
// ------------------------------------------------------------------------------------------------------
// The 'input' event fires on EVERY single keystroke. Perfect for live tracking and character counters.

const limit = 400; 
const charCount = document.querySelector("#char-count");
charCount.textContent = `Limit : ${limit} characters..`;

bio.addEventListener("input", (e) => {      
    // bio.value holds the text; bio.value.length counts the characters currently typed
    const remaining = limit - bio.value.length;
    charCount.textContent = `${remaining} characters remaining..`;
});


// ------------------------------------------------------------------------------------------------------
// Part 3: The 'change' Event (Text, Checkboxes, and Selects)
// ------------------------------------------------------------------------------------------------------

// 1. Text Inputs -> 'change' only fires AFTER the user finishes typing and clicks outside the box.
username.addEventListener("change", (e) => {
    console.log("Change Event:", username.value);
});

// 2. Checkboxes -> NEVER use .value! Always use the boolean property .checked (returns true/false).
const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", function(e) {
    console.log("Checkbox Status:", checkbox.checked); 
});

// 3. Dropdowns (<select>) -> Grabs data from the value="..." attribute of the selected <option>.
const country = document.querySelector("#country");
country.addEventListener("change", (e) => {
    console.log("Selected Country:", country.value);
});


// ------------------------------------------------------------------------------------------------------
// Part 4: UI Tracking (The 'focus' and 'blur' Events)
// ------------------------------------------------------------------------------------------------------
// focus -> Fires when an element becomes active (user clicks into it).
// blur  -> Fires when the user leaves the element (clicks away).

const passwordHint = document.querySelector("#password-hint");
const passwInput = document.querySelector("#passw");

passwInput.addEventListener("focus", (e) => {
    passwordHint.classList.remove("hidden");            // Show helpful UI hint when typing starts
});

passwInput.addEventListener("blur", (e) => {
    passwordHint.classList.add("hidden");               // Hide hint when they click away
});


// ------------------------------------------------------------------------------------------------------
// 💡 AI Debugging Exercise: The "Empty Value" Gotcha
// ------------------------------------------------------------------------------------------------------
// Q: Why will 'userName' always be an empty string below, even after the user submits the form?
/*
    const input = document.querySelector("#name");
    const userName = input.value;                       // Reading the value globally

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(userName);
    });
*/
// A: Because it captures .value the exact millisecond the page loads (when the box is empty). 
// To fix this, you MUST read input.value INSIDE the event listener at the exact moment of submit!