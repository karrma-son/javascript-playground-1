// adds two numbers
// subtracts 2 
// divides 2
// multiply 2

export class Calculator{
    add(num1, num2){
        return num1 + num2
    }

    subtract(num1,num2){
        return num1-num2
    }

    divide(num1,num2){
        return num1/num2
    }
    multiply(num1, num2){
        return num1*num2
    }
}

let n1 = 4;
let n2 = 5;

const set1 = new Calculator();

// console.log(set1.add(n1,n2));
// console.log(set1.subtract(10, 3));
// console.log(set1.divide(20, 5));
// console.log(set1.multiply(100, 9));