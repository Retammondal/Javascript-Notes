let name1 = "Something"
let product1 = {
    name1 : "Iphone",
    printName : () => {
        console.log(this.name1);
    }
}
product1.printName()