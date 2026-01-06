//reusable and prevents duplication of code
// 2 values then add and return results

function statement(){
    console.log("This is a statement")
}

function statement(value){
    console.log(`The answer is ${value}`)
}

function add1(value1, value2){
    let result = value1+value2
    statement(result)
    return result
}

function add(value1, value2, value3){
    let result = value1+value2+value3
    statement(result)

    return "Mason"
}



const subtractResult = (value,value2) => {

    return value - value2
} 

const addResult = add(3, 5, 7)
statement(addResult)
add1(2,2)
add(1,2,3)
statement(subtractResult(5, 1))