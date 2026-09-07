// Access the Button from HTML
// let btn = document.querySelector("#reveal-gift")
// let div = document.querySelector("#reveal-gift")

// Add Event
// .addEventListner("eventType", callback Func.)
//      eventType - click, mouseover, mouseup, mousedown
// btn.addEventListener("click", function(){
//     console.log("hellooo helloo micc cheeckk");
// })
    //          // Another Way of writing
    // btn.addEventListener("click", ()=> {
    //     console.log("hellooo helloo micc cheeckk");
    // })
    //              // Another way of writing
    // btn.addEventListener("click", ()=>console.log("hellooo helloo micc cheeckk"))


// let h1 = document.querySelector("#gift")

// function revealGift (){
//     console.log("IPHONE PRO MAX");
//     // from h1 remove class hidden and then add class reveal
//     h1.classList.remove("hidden")
//     h1.classList.add("reveal")
// }
// // btn.addEventListener("click", revealGift())      Not calling
// btn.addEventListener("click", revealGift)

// // btn --> single click come, double click again hides
// btn.addEventListener("dblclick", () => {
//     h1.classList.remove("reveal")
//     h1.classList.add("hidden")
// })

// btn.addEventListener("click", ()=>{
//     h1.classList.toggle("hidden")
//     // h1.classList.toggle("reveal")
// })

// ANOTHER method is passing an arguement to html buttom
// onclick = "function()"

// ###################################################################################

// EVENT OBJECT
// -----------------------
// function revealGift(event){
//     console.log(event);     // we willl get all event object list
//     console.log(event.type);        // will give type of event
//     console.log(event.target);        // jis element par click kiyaa
//     console.log(event.currentTarget);        // jis ele par event listener lagaya hain
//     h1.classList.toggle("hidden")
// }
// div.addEventListener('click', revealGift)

// // ###################################################################

// let btn = document.querySelector("#btn")

// btn.addEventListener("click", (e)=>{
//     console.log(e);
//     console.log(e.key);
//     console.log(e.clientX); // Mouse click position x
//     console.log(e.clientY); // Mouse click position y
// })
// e taken as event by default

// RemoveEventListener
                // btn.addEventListener("click", (e) => {
                //     console.log(e);
                // })
                // btn.removeEventListener("click", (e) => {
                //     console.log(e);
                // })

                // but remove will not work
// function fun1(e){
//     console.log(e);
// }
// during add and remove both should have same reference
// btn.addEventListener("click", fun1)
// btn.removeEventListener("click", fun1)


// btn.addEventListener("click", fun1, {once: true})
// this indicates it will run only once and after that it will remove

// I want to run only 3 times
// let counter = 1
// function fun1(e){
//     if (counter <=3) {
//         console.log(e);
//         counter ++
//     }
//     else{
//         btn.removeEventListener('click', fun1);
//     }
// }
// btn.addEventListener('click', fun1)

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")

// outter.addEventListener('click', (e) => {
//     console.log("Outter");
// })
// inner.addEventListener('click', (e) => {
//     console.log("Inner");
// })
// btn2.addEventListener('click', (e) => {
//     console.log("btn2");
// })

// How events internally work?
// document > html> body > div #outter > div #inner > btn #btn2
// 1st phase is Capturing --> it will start capturing from document to all to find where the even is placed
// 2nd phase is Target --> will execute on target
// 3rd Phase is Bubbling --> jis rastein se woh target tak aaya from document will go back to same way...and in this way same event things will be called in the way
// outter.addEventListener('click', (e) => {
//     console.log("Outter");
// }, {capture: true}) // what it means -- capturing phase mein event listen karwa doo
// inner.addEventListener('click', (e) => {
//     console.log("Inner");
// })
// btn2.addEventListener('click', (e) => {
//     console.log("btn2");
// })


// This is not should be happen
// stopPropagation --> stop event bubbling
// outter.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Outter");
// }) 
// inner.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Inner");
// })
// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("btn2");
// })

// #######################################################
// Event Delegation

// let products = [
//     {
//         name: "Iphone 20",
//         price: 12342,
//         imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
//     },
//     {
//         name: "Samsung 15",
//         price: 62324,
//         imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
//     },
//     {
//         name: "MI 23",
//         price: 35354,
//         imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
//     },
//     {
//         name: "Poco 10",
//         price: 43534,
//         imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
//     },
//     {
//         name: "Lava 12",
//         price: 53422,
//         imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
//     },
// ]


// let productList = document.querySelector("#product-list")

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     // const upperDiv = document.createElement("div")
//     // const lowerDiv = document.createElement("div")

//     // const img = document.createElement("img")

//     // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

//     // upperDiv.append(img)

//     // card.append(upperDiv)

//     // productList.append(card)

//     const dltbtn = document.createElement("button")
//     dltbtn.textContent = "Remove Product"
//     // dltbtn.addEventListener('click', (e)=>{
//     //     card.remove
//     // })

//     card.innerHTML =
//     `
//     <div>
//        <img src=${product.imgUrl} alt="">
//     </div>
//     <div class="productDetail">
//         <p>${product.name}</p>
//         <p>${product.price}</p>
//     </div>
//     `
//     card.append(dltbtn)
    
//     productList.append(card)

// })

// productList.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log(e.target.parentElement);
//     // e.target.parentElement.remove()
//     console.log(e.target.tagname);
//     console.log(e.target.textContent);
//     if(e.target.tagname === "BUTTON"){
//         e.target.parentElement.remove()
//     }
//     if (e.target.textContent === "Remove Product"){
//         e.target.parentElement.remove()
//     }
// })

// e.target --> in whole product list which element has been clicked
// e.target.parentElement --> targetted element ka parent selection 

// ####################################################################################
// Closest method
// .closest(selector)
// selector -- "tagname"/ ".class"/ "#id"