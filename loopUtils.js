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
const animals = ["Cat", "Horse", "Dog", "Bobby", "Giraffe", "Leopard", "Ghost", "Monkey"];

counter = [];

for (i =0; i<animals.length; i++){
    if(animals[i] == "Giraffe"){
        counter.push(animals[i]);
        console.log(animals[i]);
        console.log(`${counter} - This is the animal with the longest neck`);
        continue;
    }else{
        console.log(`${animals[i]}`);
    
    } 
}




