let pro1name = "tshirt"
let pro1price = 4999
console.log(pro1name, pro1price);

let products = ["tshirt","lower","top"]
let productsPrice = [4999,3999,2999]
// console.log(products[0], productsPrice[0]);
// console.log(products[1], productsPrice[1]);
// console.log(products[2], productsPrice[2]);
for(i=0; i<products.length; i++) {
    console.log(products[i],productsPrice[i])
}
// Negative indexing
// console.log(products[-1]); Not happens
console.log(products[products.length-1]);
console.log(products.at(-1));

let productsList = [
    ["tshirt",4999],
    ["lower",3999],
    ["top",2999]
]
for(i=0; i<productsList.length; i++) {
    console.log(productsList[i])
}
// List all the Products name
for(i=0; i<productsList.length; i++) {
    console.log(productsList[i][0])
}
// List all the ProductsPrice
for(i=0; i<productsList.length; i++) {
    console.log(productsList[i][1])
}

console.log("---------------PRODUCT DETAILS-------------");
// List all the Products Details
for(i=0; i<productsList.length; i++) {
    console.log(`Product Name is ${productsList[i][0]} with price ${productsList[i][1]}`)
}
console.log(typeof productsList);
console.log(Array.isArray(productsList));