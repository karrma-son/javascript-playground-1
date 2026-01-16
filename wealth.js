var maximumWealth = function(accounts) {
    let counter = [];
    let count = 0;
    for (i = 0; i < accounts.length; i++){
           counter = accounts.pop()
           count += counter[i]
            console.log(count)
        
            
        
    } 

};
accounts = [[1,2,3],[3,2,1]]
maximumWealth(accounts)
    // accounts is seperate arrays
    //add numbers in array to get wealth
    // push values to different array?
    //return the highest value added together

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.


// var maximumWealth = function(accounts) {
//     let counter = [];
//     let count = 0;
//     for (i = 0; i < accounts.length; i++){
//         while(i > 0){
//            counter = accounts.pop()
//            sum = counter.reduce((accumulator, currentValue) => accumulator + 
//             currentValue,0)
//             console.log(sum)
//             break
//         }
//     } 

// };
