const obj = {
    nameP : "Retam",
    age: { roll: 25 }
}

// Without optional chaining (Crashes if address is undefined)
// console.log(obj.address.street); // TypeError

// With optional chaining (Safe)
console.log(obj?.address?.street);  // undefined (No crash!)
// console.log(obj?.address.street); // TypeError
console.log(obj?.age?.roll);        // 25