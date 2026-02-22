
// for (let i = 5; i >=0; i--){
//    console.log(i)
// }
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i += 2;
// }

// let j = 5;

//  while (j > 0){
//     console.log(j);
//     j--;
//  }

// let numArray = [1,2,3];
// let newArray = [];

// for (let i = 0; i<numArray.length; i++){
//     newArray.push(numArray[i]+1);

// }
//     



function addOne(array, array2) {
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] + array2[i]);
    } 

    console.log(newArray);

};




addOne([5,9,3], [3,3,7]);