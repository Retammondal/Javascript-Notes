// ().textContent
// ().innerHTML
// ().innerText
// --------------------------------------------------------------------------------- 
// textContent
// --------------------------------------------------------------------------------- 
const parentDiv2 = document.querySelector("#parent-div>div>p")
console.log(parentDiv2.textContent);                    // Reading
parentDiv2.textContent = "Hello I am Retam Mondal"      // Modifying
console.log(parentDiv2.textContent);

// --------------------------------------------------------------------------------- 
// innerHTML
// --------------------------------------------------------------------------------- 
console.log(parentDiv2.innerHTML);
parentDiv2.innerHTML = `
                        <p>Hey, I am Retam Mondal</p>
                        <p style="display:none"> This will be hidden Text </p>
                        <div>
                            <p> Hey, Again Retam Mondal</p>
                        </div>
                        `
console.log(parentDiv2.innerHTML);

const parentDiv3 = document.querySelector('#parent-div')
console.log(parentDiv3.textContent);
console.log(parentDiv3.innerHTML);

// --------------------------------------------------------------------------------- 
// innerText
// --------------------------------------------------------------------------------- 
console.log(parentDiv3.innerText);
// Only Difference is it's
// Gets or sets the visible text content of an element. Ignores hidden elements.