shopItems = { 
    shopItem1: {
        name: "basketball",
        price: 2095
    },
    shopItem2: {
        name: "skateboard",
        price: 2495,
    },
    shopItem3: {
        name: "basketball",
        price: 2095,
    }
};

// shopItem1.price += 500;

shopItem1["delivery-time"]= "3 days";

shopItem2["delivery-time"]= "2 days";
// console.log(shopItem1);

function comparePrice(product1, product2){
    const lessExpensive = (product1.price < product2.price) ? product1 : product2;
    const priceWithTax = (lessExpensive.price/100 +(lessExpensive.price/100 * .07)).toFixed(2);
    console.log(`The ${lessExpensive.name} is less expensive and costs $${priceWithTax} after taxes`)
};

const isSameProduct = (product1, product2) => {
    const productCheck = (product1.name === product2.name && product1.price === product2.price) ? true : false;
    console.log(productCheck)
};

let greeting = "Thank You for YOUR Purchase "
console.log(greeting.toLowerCase())
console.log(greeting.repeat(3))
console.log()
comparePrice(shopItem1, shopItem2)
isSameProduct(shopItem1, shopItem3)

