// ------------------------------------------------------------------------------------------------------
// Part 5: Scope (Where Can Variables Be Accessed?)
// ------------------------------------------------------------------------------------------------------
// Scope defines variable accessibility. 
// var = function scope. let, const = block + function scope.

// 1. Global Scope: variable globally accessible
// 2. Block Scope: {....Code of Block.....}
// 3. Function Scope: stays inside function only

let userName = "Retam";                         

let nameP1 = "Retam Mondal";                    
{
    let nameP2 = "Rishob Mondal";
    console.log(nameP2);                        // ✅ nameP2 is accessible inside block
    console.log(nameP1);                        // ✅ nameP1 accessible everywhere
    {
        console.log(nameP2);                    // ✅ nested blocks can access parent block variables
    }
}
// console.log(nameP2);                         // ❌ ReferenceError: nameP2 is not defined

function hello(){                               
    let nameP3 = "Anushka Mondal";
    console.log(nameP3);                        // ✅ nameP3 is accessible obviously
}
// console.log(nameP3);                         // ❌ ReferenceError: not defined

let x = 10;
{
    let x = 20;                                 // ◀ This let stays locked inside this block!
}

var y = 10;
{ 
    var y = 20;                                 // ⚠️ Overwrites global 'y' (var ignores block scope {})
}
