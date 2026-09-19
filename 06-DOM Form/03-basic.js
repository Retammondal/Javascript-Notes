// ----------------------------------------------------------------------------------------
// Submit Event
// ----------------------------------------------------------------------------------------



const form = document.querySelector("#form")
const username = document.querySelector("#name")
const bio = document.querySelector("#bio")

form.addEventListener("submit",(e) =>{
    e.preventDefault()                                      // Stops the page from reloading
    console.log("Hiii");
    const name = document.querySelector("#name").value      // Grabbing the VALUE (the actual typed text)
    const email = document.querySelector("#email")
    const passw = document.querySelector("#passw")          // Grabbing the HTML ELEMENT (the tag itself)
    
    console.log(name, email.value, passw);                  // Getting Mix of values and tags..
    
    // Creating an object. 
    // ES6 Trick: writing {name} is the same as {name: name}
    console.log({name, email, passw});
    // by giving inside object, it will automatically create key value pair and give value for .value
    console.log({name, email : email.value, password : passw.value});
})


// ----------------------------------------------------------------------------------------
// Real-Time Character Counter (Input Event)
// ----------------------------------------------------------------------------------------

const limit = 400 
const charCount = document.querySelector("#char-count")
charCount.textContent = `${limit} characters remaining..`

bio.addEventListener("input", (e)=>{       // keystroke
    // console.log(bio.value);                  --> the current text inside the box
    // console.log(bio.value.length);           --> will give length of value each time
    const remaining = limit - bio.value.length
    charCount.textContent = `${remaining} characters remaining..`
})


// ----------------------------------------------------------------------------------------
// Change Event
// ----------------------------------------------------------------------------------------
// input --> pressing key every keystroke it will fired
// change --> fired once when unfocused from tab
username.addEventListener("change", (e) => {
    console.log("Change Event", username.value);
})
username.addEventListener("input", (e) => {
    console.log("Input Event", username.value);
})

const checkbox = document.querySelector("#checkbox")
checkbox.addEventListener("change", function(e){
    console.log(checkbox.checked);                  // ans in true/ false
})

const country = document.querySelector("#country")
country.addEventListener("change", (e)=>{               // change and input both works
    console.log(country.value);
})
// if you notice in select tags option values got whatever given in value="" 
// if value not given then main thing will show up


// ----------------------------------------------------------------------------------------
// Focus and Blur Event Type
// ----------------------------------------------------------------------------------------
// focus -- comes only one time when click/focused

const email = document.querySelector("#email")
email.addEventListener("focus",(e)=>{
    console.log("Focused Email", email.value);
})
email.addEventListener("blur",(e)=>{
    console.log("Blurred Email", email.value);
})

// usecase
const passwordhint = document.querySelector("#password-hint")
const password = document.querySelector("#passw")
password.addEventListener("focus", (e)=>{
    passwordhint.classList.remove("hidden")
})
password.addEventListener("blur", (e)=>{
    passwordhint.classList.add("hidden")
})