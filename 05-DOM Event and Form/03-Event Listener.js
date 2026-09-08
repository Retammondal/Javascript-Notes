// --------------------------------------------------------------------------------- 
// Events
// --------------------------------------------------------------------------------- 
// action or occurrence that happens in the browser, which JavaScript can "listen" for and respond to.
// element.addEventListener(eventType, callbackFunction, options);

let btnDiv = document.querySelector("#btn-div")
let btn = document.querySelector("#btn")

// --------------------------------------------------------------------------------- 
//  Add Events
// --------------------------------------------------------------------------------- 

// Method 1: Named function (recommended for reusability)
function handleClick(){
    console.log("Button Clicked");
    btnDiv.lastElementChild.classList.toggle("hidden")
}
btn.addEventListener('click', handleClick)

// Method 2 : Anonymouse Function
btn.addEventListener('click', function(){
    console.log("Kaisa Laga Mera Maazak");
})
// Method 3 : Arrow Function
btn.addEventListener('click', () => {
    console.log("Kaisa Laga Firse Mera Maazak");
})

// --------------------------------------------------------------------------------- 
//   Remove Events
// --------------------------------------------------------------------------------- 
            // btn.addEventListener('click', function(){
            //     console.log("Added Events");
            // })
            // btn.removeEventListener('click',function(){
            //     console.log("Added Events");
            // })
// ❌ This WON'T work - different function references
function addEvent(){
    console.log("Added Events");
}
btn.addEventListener('click',addEvent)
btn.removeEventListener('click',addEvent)

// ✅ This works - same function reference

// --------------------------------------------------------------------------------- 
//   Event Listener with Options
// --------------------------------------------------------------------------------- 
// { once: true } - runs only once, then auto-removes
btn.addEventListener("click", function(e) {
    console.log("This runs only once!");
}, { once: true });

// Click again - nothing happens!

// --------------------------------------------------------------------------------- 
//   EXAMPLE : Custom Removal after N times
// --------------------------------------------------------------------------------- 
let counter = 1
function counterListner(){
    if (counter<=3){
        console.log(`Runs ${counter} time`);
        counter ++        
    }
    else{
        btn.removeEventListener('click',counterListner)
    }
}
btn.addEventListener('click',counterListner)