const nums = [10, 20, 30];
nums.push(90)
const nums2 = [10, 20, 30, 230] 

function getLastValue(list){
    console.log(list.pop())

}
// getLastValue(nums);
// getLastValue(nums2)
let swapped = [];

const arraySwap = (values) => {
   while (values.length > 0){
        let reverse = values.pop()
        swapped.push(reverse);
    
   }
       console.log(swapped)

}

arraySwap(nums2);
