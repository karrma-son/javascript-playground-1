// const product = {
//     name: 'shoes',
//     price: 4500
// };

// console.log(product.name);

// product.name = 'Tennis shoes';
 
// console.log(product.name);

// product.newProperty = true;

// console.log(product);

// delete product.newProperty;

// console.log(product);
// console.log(typeof product);

// const animalList =[ 
//     {species: "Jaguar", class: "Mammal", family: "Felidae", genus: "Panthera", size: 6, threatened: false},
//     {species: "Horse", class: "Mammal", family: "Equidae", genus: "Equus", size: 8, threatened: false}
// ];
//  console.log(`The first species to compare is a ${animalList[0].species}`)
//  console.log(animalList[1]['size'])


 const product = {
    name: "Polo Shirt",
        'shipping-time': '3 days',
    count: {
        small: 40,
        medium: 35,
        large: 50,
        xlarge: 30,
        xxl: 25,
        xxl: 15
    },  
    order: function() {
        console.log('this is a method')
    },
    newMethod() {
        console.log(`This is also a method checking how many larges - 
        ${product.count.large} which is a ${typeof product.count.large}`)
    }

 };

console.log(product.count.medium);
product.order();
product.newMethod();
console.log(`${JSON.stringify(product.count)} 
is a string from an  ${typeof product.count}`);

const jsonString = JSON.stringify(product.count);
console.log(JSON.parse(jsonString));
 
// localStorage.setItem('message', 'This has been fun.');