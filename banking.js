//deposit and withdrawal
//display total account
import { Calculator } from "./calculator.js"

class Banking {
    constructor(totalAmount){
        this.banking_calculator = new Calculator();
        this.totalAmount = totalAmount;
    }

    deposit(depositAmount){
        this.totalAmount = this.banking_calculator.add(this.totalAmount, depositAmount)
        return this.totalAmount;
    }

    withdrawal(withdrawalAmount){
        if (withdrawalAmount > this.totalAmount){
            console.log("You risk overdraft")
        } else { 
            this.totalAmount = this.banking_calculator.subtract(this.totalAmount, withdrawalAmount)
        }
            return this.totalAmount;
    }
    
    
}

const BofA = new Banking(1000);

// let total1 = 1000;

console.log(BofA.deposit(500));

console.log(BofA.withdrawal(1500));
