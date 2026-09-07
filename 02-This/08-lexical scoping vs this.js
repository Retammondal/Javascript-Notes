// Lexical Scoping - based on WHERE function is written
let name = "Global";

function outer() {
    let name = "Outer";
    
    function inner() {
        console.log(name); // Looks up the scope chain
    }
    return inner;
}

const fn = outer();
fn(); // "Outer" - lexical scoping (where it's written)

// 'this' Binding - based on HOW function is called
const obj = {
    name: "Object",
    showThis: function() {
        console.log(this.name);
    }
};

const copy = obj.showThis;
copy(); // undefined (global binding - how it's called)
obj.showThis(); // "Object" (implicit binding - how it's called)