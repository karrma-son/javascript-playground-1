
let cart = [];
let priceTotal = [];

function cartQuanity(product, price){
   
    if (!cart.includes(product)){
        cart.push(product)
        priceTotal.push(price);
    } else{
        console.log(`Your cart already includes ${product} & ${price}`);
        let newTotal = priceTotal.reduce((a,b) => a+b, 0);
        console.log( ` Your total is $${newTotal}`);
        return newTotal;
    }
  
};


let product1 = "Soda";
let product2 = "Hamburger";
let product3 = "Cheeseburger";

cartQuanity(product1, 5);
cartQuanity(product2, 8);
cartQuanity(product3, 9);
cartQuanity(product2, 8);