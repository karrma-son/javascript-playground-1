// // teacher searching for student then breaks when student is found
// const students = ["Tammy", "Becky", "Laura", "Amanda", "Richie", "Greg", "Arnold", "Richie"]

// for (i = 0; i < students.length; i++){
//     console.log(students[i]);
//     if ( students[i] == "Richie"){
//         console.log("Rich")
//         break
//     }
// }

// for (i = 0; i <= 10; i++){
//     if( i%2 == 0){
//         console.log(i);
//     }
   
    // break;
// }

// for ( i = 0; i <= 10; i ++){
//     console.log("outside loop = " + i); 
    
//     for ( j = 0; j <= 10; j++){
//         console.log("inside loop = " + j);
//         break;   
//     }
   
 
// };
// const animals = ["Cat", "Horse", "Dog", "Bobby", "Giraffe", "Leopard", "Ghost", "Monkey"];





// const animalList =[ 
//     {species: "Jaguar", class: "Mammal", family: "Felidae", genus: "Panthera", size: 6, threatened: false},
//     {species: "Horse", class: "Mammal", family: "Equidae", genus: "Equus", size: 8, threatened: false}
// ];
//  console.log(`The first species to compare is a ${animalList[0].species}`)
//  console.log(animalList[1]['species'])


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
    method() {
        console.log(`This is also a method checking how many larges - 
        ${product.count.large} which is a ${typeof product.count.large}`)
    }

 };

 console.log(product.count.medium);
product.order();
product.method();
