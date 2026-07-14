let cart = [
    { name: "Laptop", price: 55000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

let names = cart.map((Element)=>{
    return Element.name
})
console.log(names)

let Bill = cart.reduce((a,b)=>{
    return a + b.price;
},0)
console.log(Bill);

function dis(price,perc = 10){
    return (price/100)*perc
}
console.log(dis(Bill))

let newProduct = { name: "Headphones", price: 2500, quantity: 1 };

let updatedCart = [...cart, newProduct];
console.log(updatedCart)


for (const element of updatedCart) {
    console.log(`${element.name} has ${element.price} and quantity is ${element.quantity}`)
}