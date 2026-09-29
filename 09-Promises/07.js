async function fun3(){
    return "Hii"
}

console.log(fun3());                        // Promise { 'Hii' }
fun3().then((data)=>{console.log(data);})     // Hii

function fun4(){
    return Promise.resolve("Hello")
}


async function fun5() {
    fun3().then(data => {console.log(data);})   // Hii

    let data = await fun3();
    let data2 = await fun4()

    console.log(data, data2);                          // Hii
}

fun5();                                      // Hii x 2
