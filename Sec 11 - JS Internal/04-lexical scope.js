// ------------------------------------------------------------------------------------------------------
// Part 8: Lexical Scope and Scope Chain
// ------------------------------------------------------------------------------------------------------
// Scope Chain (Inside Out rule): If a variable is not defined locally, JS goes out one by one.
// Lexical Scope: Scope is determined by where you wrote the code, not where you call it.

let worldVar = "Earth";

function country() {
    let countryVar = "India";
    
    function state() {
        function city() {
            console.log(worldVar);              // Not in city/state/country -> Climbs up to Global -> "Earth"
        }
        city();
    }
    state();
}

let city = "Delhi";                             // Lexical scope test

function printCity() {
    console.log(city);                          // Written in global scope, so it binds to global "Delhi"
}

function runCallback(fn) {
    let city = "Varanasi";
    fn();                                       // Still prints "Delhi" (looks where it was written, not called)
}
runCallback(printCity);

function parentRoom() {                         // The "One-Way Glass" Metaphor
    let parentSnack = "Chips";

    function childRoom() {
        let childSnack = "Candy";
        console.log(parentSnack);               // ✅ Child can look out to parent's room -> "Chips"
    }
    // console.log(childSnack);                 // ❌ Parent CANNOT look inside child's room
}
