// Spread and Rest Operator
// Rest Operator -> pack and combine and give array

// Rest Parameters (Functions)
function add(first, second,...restNumbers){
    console.log(first);
    console.log(second);
    console.log(restNumbers);
    // will return in array
    console.log(...restNumbers);
    // TRICKY : previously ...restNumbers already packed them in array(Rest Operator)
    // now again we are using ...restNumbers it will unpack the array(Spread Operator)
}
add(53,52,7,56,85,2,36,54);

console.log("--------------------------------------------------------------------------------------");
// Example
function sum(...numbers){
    let total = 0;
    for (value of numbers){
        total += value
    }
    console.log(total);;
}
sum(53,52,7,56,85,2,36,54);

