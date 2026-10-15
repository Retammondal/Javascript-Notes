// String() vs JSON.stringify()

const array = [4,5,"Retam"];

// Convert Array --> String 
// ------------------------------------------------------------------------------------------------------
// String() (WRONG METHOD)
// ------------------------------------------------------------------------------------------------------
const string1 = String(array)           // 4,5,Retam
console.log(string1);
// We can't get that Array again from this String

// ------------------------------------------------------------------------------------------------------
// JSON
// ------------------------------------------------------------------------------------------------------
// JSON.stringify(Obj/Arr)  --> Convert Obj/Arr to String but it can be Reverse
// JSON.parse(JSON String)  --> Convert again to String

const string2 = JSON.stringify(array);
console.log(string2);                   // "[4,5,"Retam"]"
console.log(JSON.parse(string2));
