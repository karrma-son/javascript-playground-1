// cart function that has for loop, while loop, and adding
// string interpolation
// values added then printed
// delete?


function addCost(cost, tax){
    let totalCost = cost+(cost * tax) ;
    console.log(`This is the total cost - $${totalCost}`);
    return totalCost;
};

let cart = [];

function addToCart(product){
    while (!cart.includes(product)){
            cart.push(product);
            console.log(`${product} has been added to the cart`)
            console.log(cart)
        if (cart.includes(product)){
            break;
        }
            
            product++;
    }
}


const cart1 =[
    {id: 1, item1 : "bread"},
    {id: 2 , item2 : "milk"},
    {id: 3, item3 : "eggs"},
]

addToCart("Horse")
addToCart("granola")
addToCart(14)
addToCart("Horse")