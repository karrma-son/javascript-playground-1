//


// function cart(item){
//     var addedItems = "";
//     while (item.length > 0) {
//        console.log( item.pop() );
//     }
//         addedItems = item + addedItems;
//       console.log(addedItems)
       
// };

// const items1 = ["potato", "cheese", "ham"]
// cart(items1)

const cart = [];
const prices = [];


function addToCart(item, price){
    if (!cart.includes(item)){
        cart.push(item);
        prices.push(price);
        console.log(cart); 
        console.log(prices); 
    }else{
        console.log(`You already added ${item}`);
        const totalPrice = prices.reduce((sum, currentPrice) => sum + currentPrice, 0);
        console.log(`Your total price is $${totalPrice}`)
 
    }
}

let item1 = "Grapes";
let item2 = "Oranges";
let price1 = 4;
let price2 = 6;

addToCart(item1, price1)
addToCart(item2, price2)
addToCart(item1, price1)