// Standard objects are not iterable by default. To loop over an object's values with for...of, 
// We must convert it to an array first using Object.values().

let studentProfile = { name: "Anushka", age: 21, isEnrolled: true };

for (let val of Object.values(studentProfile)) {
    console.log(val);           // Prints: Anushka, 21, true
}

// Object.entries
for (let pair of Object.entries(studentProfile)){       // pair will come as [key, value]
    console.log(pair);
    console.log(pair[0], pair[1]);
}

// Object Destructuring in Object.entries
for (let [key,value] of Object.entries(studentProfile)){        // [key, value] = [key, value]
    console.log(key, value);
}