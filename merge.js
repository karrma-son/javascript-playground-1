// function mergeTwoArrays(list1, list2) {

//     let newArray = [];

//     for(let i = 0; i<list1.length; i++){
//         newArray.push(list1[i]) 
//     }

//     for(let j = 0; j<list2.length; j++){
//         newArray.push(list2[j])
//     }

//     newArray.sort((a, b) => a - b)
//     console.log(newArray)
    

// };
// function mergeTwoArrays(list1, list2){
//     const newArray = [...list1, ...list2];
//     newArray.sort((a, b) => a-b);
//     console.log(newArray);
// }


function mergeTwoArrays(list1, list2){
    const stringArray = 
        list1.some(el => typeof el === "string")||list2.some(el => typeof el === "string");
    
    const mergedArray = [...list1, ...list2];    

    if (stringArray)  { 
        console.log(mergedArray.sort());
    }
   
    else {console.log(mergedArray.sort((a,b) => a-b))
    }
}

 let listA = [5,9,4]; 
 let listB = [11,43,24];
 let listC = []; 
 let listD = [];
 let listE = ["Nasi", "Pra", "Avad", "Lamp"]
 let listF = ["Hao", "Bana"]

mergeTwoArrays(listA,listB)
mergeTwoArrays(listC,listD)
mergeTwoArrays(listE,listF)