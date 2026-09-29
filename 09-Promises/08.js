async function fun3(){
    return "Hii";
}

function fun4(){
    return Promise.resolve("Hello");
}

console.log("1");
async function fun5() {
    try{
        console.log("2");
    
        let data = await fun3();    // await will stop all the down codes flow
    
        console.log("3");
        let data2 = await fun4();
        console.log("4");
    
        console.log(data, data2);                     
    } catch(error){
        console.log(error);
    } finally{
        console.log("Main toh hamesha Run karunga..");
    }
}
console.log("Retam");

fun5();                         

console.log("5");
