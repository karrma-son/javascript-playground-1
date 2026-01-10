
// function timeCounter(hour, user){
// if (hour >= 6 && hour <=12){
//     console.log(`Good morning${user}`)
// } else if (hour >=13 && hour <=17){
//     console.log(`Good afternoon${user}`)
// } else {
//     console.log(`Good night${user}`)
// }
// };

// let hour = 18
// // let user1 = "Mason";
// // let user2 = "Jade";
// // let user3 = "Charlie";
// const night = 1
// const day = 8
// const afternoon = 15

// timeCounter(night, "Mason")
// timeCounter(day, "Jade")
// timeCounter(afternoon, "Charlie")




// Generation 	Birth Years
// The Greatest Generation (GI Generation) 	Born 1901–1927
// The Silent Generation 	Born 1928–1945
// Baby Boom Generation 	Born 1946–1964
// Generation X 	Born 1965–1980
// Millennial Generation or Generation Y 	Born 1981–1996
// Generation Z or iGen 	Born 1997–2010
// Generation Alpha 	Born 2010–2024
// Generation Beta 	Born 2025–2039

const statment = (value) => {
    console.log(`Find more about ${value}`)
}

function whatGen(year, user){
    if (year >=1901 && year <=1927){
        console.log(`${user} is part of the Greatest Generation.`);
        return "Greatest Generation";
    } else if (year >= 1928 && year <= 1945){
         console.log(`${user} is part of the Silent Generation.`);
         return "Silent Generation";
    } else if (year >= 1946 && year <= 1964){
         console.log(`${user} is part of the Baby Boomer Generation.`);
         return "Baby Boomer";
    } else if (year >= 1965 && year <= 1980){
         console.log(`${user} is part of Generation X.`);
         return "Generation X";
    } else if (year >= 1981 && year <= 1996){
         console.log(`${user} is part of the Millennial Generation.`);
         return "Millennial Generation";
    } else if (year >=1997 && year <=2010){
         console.log(`${user} is part of Generation Z.`);
         return "Generation Z";
    } else if (year >=2010 && year <=2024){
         console.log(`${user} is part of Generation Alpha.`);
         return "Generation Alpha";
    } else{
         console.log(`${user} is a baby part of Generation Beta.`);
         return "Generation Beta";
    }
}

// whatGen(1993, "Mason")
// whatGen(1945, "Mema")
// whatGen(1969, "Linda")
// whatGen(1999, "Maden")
// whatGen(2025, "Briar")




const barEntry = (year, user) => {
const legal = (year <= 2005) ? "an adult" : "a minor";
console.log(`${user} is ${legal}`);
}




statment(whatGen(1993, "Mason"));
barEntry(2008,"Mason");