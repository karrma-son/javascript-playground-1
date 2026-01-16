const product = {
    name: 'shoes',
    price: 4500
};

console.log(product.name);

product.name = 'Tennis shoes';
 
console.log(product.name);

product.newProperty = true;

console.log(product);

delete product.newProperty;

console.log(product);
console.log(typeof product);
