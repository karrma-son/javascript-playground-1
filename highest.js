
// const largestAltitude = (gain) => {
//     let counter = 0;
//     let highest = 0;

//     gain.forEach(element =>  {
//         counter+= element;
//         highest = Math.max(counter, highest)
//     });
    
//     return highest
// };

const largestAltitude = gain =>{
    let max = 0, sum = 0;
    for(const i of gain){
        sum += i;
        if(sum>max) max = sum;
    }
    console.log(max)
}

let gain1 = [-5,1,5,0,-7]
let gain2 = [-4,-3,-2,-1,4,3,2]

largestAltitude(gain1)
largestAltitude(gain2)