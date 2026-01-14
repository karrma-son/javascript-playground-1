//reusable and prevents duplication of code
// 2 values then add and return results

// function statement(){
//     console.log("This is a statement")
// }

// function statement(value){
//     console.log(`The answer is ${value}`)
// }

// function add1(value1, value2){
//     let result = value1+value2
//     statement(result)
//     return result
// }

// function add(value1, value2, value3){
//     let result = value1+value2+value3
//     statement(result)

//     return "Mason"
// }



// const subtractResult = (value,value2) => {

//     return value - value2
// } 

// const addResult = add(3, 5, 7)
// statement(addResult)
// add1(2,2)
// add(1,2,3)
// statement(subtractResult(5, 1))

// function greet(name){
//    if (!name){
//         console.log("hi there")
//     }else{
//          console.log(`Hello ${name}`)
//     }
// }
// name1 = "mason"
// greet()

// function convertToFahrenheit(celsius){
//     let fahrenheit = (celsius*9/5) +32;
//     console.log(fahrenheit)
// }

// convertToFahrenheit(25)

// function convertToCelsius(fahrenheit){
//     let celsius = (fahrenheit-32)*5/9
//     console.log(celsius)
// }

// convertToCelsius(86)

// function convertTemp(degrees, unit){
//    if (unit ==== "C"){
//        let fahrenheit = (degrees*9/5)+32
//        console.log(`${fahrenheit}F`)
//     }else{
//         let celsius = (degrees-32)*5/9
//         console.log(`${celsius}C`)
//     }


// }

// convertTemp(86, "F")

// var fizzBuzz = function(n) {
//    const answer = [];
//         for(i=1; i <= n; i++){
//         if (i%3 === 0 && i%5 === 0) {  
//             answer.push("FizzBuzz");
//         }else if (i%3 === 0){    
//             answer.push("Fizz")
//         }else if (i%5 === 0){
//         answer.push("Buzz")
//         }else{   
//             answer.push(i + "")
//         } 
//     };
//    console.log(answer)
// };

// fizzBuzz(4)


function convertLength(length, from , to){
    if (from !== "km" && from !== "miles" && from !== "ft"){ 
        console.log(`invalid unit ${from}`);

    } else if (to !== "km" && to !== "miles" && to !== "ft"){
        console.log(`invalid unit ${to}`);
    } 
    
    if (from === "miles" && to === "km"){
        length *= 1.6;
        console.log(`The new distance is ${length} ${to}`);

    } else if ( from === "km" && to === "miles") {
        length /= 1.6;
        console.log(`The new distance is ${length} ${to}`);

    } else if ( from === "miles" && to === "ft"){
        length *= 5280;
        console.log(`The new distance is ${length} ${to}`);

    } else if ( from === "km" && to === "ft"){
        length *= 3281;
        console.log(`The new distance is ${length} ${to}`);

    } else if (from === 'ft' && to === 'km') {
        console.log( `${length / 3281} ${to}`);

    } else if (from === 'ft' && to === 'miles') {
          return `${length / 5280} ${to}`; 

    } else if ( from ===  to){
        console.log(`That's the same as ${length} ${to}`);

    }
}

convertLength(5, "km", "potatos")
