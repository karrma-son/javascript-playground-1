var numberOfSteps = function(num) {
    let list = [];
        while (num > 0){
            if (num %2 === 0){
                num /= 2;
                list.push(num);
            } else {
                num -= 1;
                list.push(num);
            }
        }
        console.log(list.length)
};

numberOfSteps(8)