 
// var maximumWealth = function(accounts) {
//     let counter = [];
//     for ( let i = 0; i < accounts.length; i++) {
//         let count = 0;
//         for ( let j = 0; j < accounts[i].length; j++ ) {
//             let value = accounts[i][j]
//             count = value + count; 
//         }
//         counter.push(count) 
//     }   
//         let max = counter[0]
//         for (let k = 1; k < counter.length; k++) {
//             if (counter[k] > max) {
//                 max = counter[k]
//             }
//         }
//         console.log(max)
// };
      
var maximumWealth = function(accounts) {
    let maxValue = 0;
    for (let i = 0; i < accounts.length; i++){
        let count = accounts[i].reduce((a, b) => a+b, 0);
        maxValue = Math.max(count, maxValue );
        
        // if (max < count){
        //     max = count;
        // }
        
    }
    console.log(maxValue)
    // return max;
};

maximumWealth([[1,2,3],[3,2,1]]);
maximumWealth([[1,5],[7,3],[3,5]]);
maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);


