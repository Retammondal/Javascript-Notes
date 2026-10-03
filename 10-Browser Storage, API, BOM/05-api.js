
// ------------------------------------------------------------------------------------------------------
// The Old Way: XMLHttpRequest (XHR)
// ------------------------------------------------------------------------------------------------------
// Requires a lot of Things to do --> Solution fetch()

/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    let data = xhttp.responseText;
    console.log(data);
};
xhttp.open("GET", "https://api.github.com/users/nishantsaini2331", true);
xhttp.send();
*/


// fetch(API Endpoints, options)    --> fetch always return promise

async function getUser(userName = "nishantsaini2331"){
    // fetch() -> request and it returns response stored in response
    const response = await fetch(`https://api.github.com/users/${userName}`);

    // Process 2 to get data from that response which is also a async task
    const data = await response.json()

    return data;
}


document.querySelector("#github-form").addEventListener("submit", async(e)=>{
    e.preventDefault()
    let username = document.querySelector("#github-username").value
    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML = `
            <img src="${data.avatar_url}" alt="Profile picture of ${data.login}" width="250"> <br>
            <i>username : ${data.login}</i>
            <h2>${data.name || data.login}</h2>
            <p>bio : ${data.bio || 'No bio available'}</p>
            <p>Public Repos : ${data.public_repos}</p>`;
})

// why the await and async?
// if we just give getUser() -> and server takes time to give username; to wait the function run untill data comes
