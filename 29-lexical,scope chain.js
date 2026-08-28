// Scope Chain (inside Out rule)
// If a variable is not defined inside a function, JS goes out one by one...

let worldVar = "Earth";

function country() {
    let countryVar = "India";
    
    function state() {
        let stateVar = "Uttar Pradesh";
        
        function city() {
            let cityVar = "Varanasi";
            
            // Search Process for 'worldVar':
            // 1. Is worldVar in city()? No. Climb up.
            // 2. Is worldVar in state()? No. Climb up.
            // 3. Is worldVar in country()? No. Climb up.
            // 4. Is worldVar in Global? Yes! Use "Earth".
            console.log(worldVar); 
        }
        city();
    }
    state();
}

// Calling the Function
country();

console.log("----------------------------------------------------------");

// Lexical Scope
// A function's scope gets by where you wrote it during coding, not where it runs.
let city = "Delhi";

function printCity() {
    console.log(`Getting by printCity function :`, city); 
    // Written in global scope, so it bonds to global "Delhi"
}

function runCallback(fn) {
    let city = "Varanasi";
    console.log(`Getting by runCallback function :`, city); 
    fn(); 
    // Even though it's called here, it still prints "Delhi"
}
runCallback(printCity);

console.log("----------------------------------------------------------");

// Lexical Scope
// The "One-Way Glass" Metaphor
// Inner functions can look outward, But outer function can't look inward
function parentRoom() {
    let parentSnack = "Chips";

    function childRoom() {
        let childSnack = "Candy";
        // The child can see its own room, AND look out the glass to the parent's room.
        console.log(childSnack); // "Candy"
        console.log(parentSnack); // "Chips"
    }
    
    childRoom();
    
    // The parent CANNOT look inside the child's room.
    // console.log(childSnack); // ❌ ReferenceError: childSnack is not defined
}
parentRoom();

