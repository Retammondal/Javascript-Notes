const email2 = document.querySelector("#email2")
const password2 = document.querySelector("#password2")
const username2 = document.querySelector("#name2")

function validUsername(username){
    if(username.value.trim().length === 0){
        return false;             
    }
    return true;
    
}



form2.addEventListener("submit",(e)=>{
    e.preventDefault();
    const isUsernameValid = validUsername(username2)
    
    if(isUsernameValid){
        console.log("Form is valid");
    } else {
        console.log("Form is Invalid");
        return;                 // early return if this triggers lower portion will not work
    }

    console.log({username : username2.value, password: password2.value, email: email2.value});

})