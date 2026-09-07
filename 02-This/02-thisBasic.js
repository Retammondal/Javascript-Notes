// The SAME function can have DIFFERENT 'this' values
function showThis() {
    console.log(this);
}

// Called globally
showThis(); // Window/Global (in non-strict mode)

// Called as an object method
const obj = { showThis: showThis };
obj.showThis(); // obj

// Called with call/apply
showThis.call({ custom: "object" }); // { custom: "object" }