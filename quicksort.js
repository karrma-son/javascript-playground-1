


const quicksort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return[...quicksort(left), pivot, ...quicksort(right)];
};


const unsortedArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const unsortedArray2 = [249, 124, 2412, 12221, 492, -932, 12314, -3333, 210, 0];

console.log(quicksort(unsortedArray))
console.log(quicksort(unsortedArray2))