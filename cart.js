// cart function that has for loop, while loop, and adding
// string interpolation
// values added then printed
// delete?





function addCost(cost, tax){
    let totalCost = cost+(cost * tax) ;
    console.log(`This is the total cost - $${totalCost}`);
    return totalCost;
};

const cart = [];

function addToCart(product){
   if (!cart.includes(product)){
            cart.push(product);
            console.log(`${product} has been added to the cart`)
            console.log(cart)
            
   } else {
            console.log(`${product} has already been added to the cart.`)      
   }

           
}

//adds all items in cart - adds the total 
//function returns the total value
//while loop?
//array with prices 
//when items added to cart - add price

// const counter = [];

// function priceTotal( product, prices){
//     for(i=0; i < prices.length; i++){
//         while(counter.includes(prices)){
//             counter.push(prices)
            
//         }
//         let cost = prices[i] + prices[i];
//         totalCost = cost + cost;
//         console.log(totalCost)
//     }
// }



function priceAdd(prices){  
    let total = 0
    for ( i = 0; i < prices.length; i++){
       total = prices[i] + total
    }
    console.log(total)
    return total
}

let prices1 = [3, 1, .99, 2]

priceAdd(prices1)
// addToCart("Potato")
// addToCart("Granola")
// addToCart("Honey")
// addToCart("Potato")
// addToCart("Peaches")



// const cart1 =[
//     {id: 1, item1 : "bread"},
//     {id: 2 , item2 : "milk"},
//     {id: 3, item3 : "eggs"},
// ]


function pricePlus(prices){
    let counter = 0;
    for(i = 0; i < 100; i = i + 20){
        console.log(i)
        // counter = prices[i] + counter;
    }
    //  console.log(counter)
     return counter
}

prices2 = [1.75, 1.99, 1.85, 2.45]

pricePlus(prices2)


