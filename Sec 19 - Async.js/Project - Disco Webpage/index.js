const body = document.querySelector("body");

let colorStr = "0123456789abcdef";      // Taking random color from these ; as Hex code comes from these only


setInterval(function(){
    let color = ""
    for (let i = 1; i<=6; i++){
        let index = Math.floor(Math.random() * colorStr.length)
        let randomValue = colorStr.charAt(index) 
        color += randomValue
    }
    
    body.style.backgroundColor = `#${color}`

}, 200)
