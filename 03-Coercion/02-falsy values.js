// Falsy values:
console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));     // false
console.log(Boolean(NaN));      // false

// Everything else is truthy:
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean(" "));      // true (space is not empty)
console.log(Boolean(-1));       // true