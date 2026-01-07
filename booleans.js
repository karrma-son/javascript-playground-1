
function timeCounter(hour, user){
if (hour >= 6 && hour <=12){
    console.log(`Good morning ${user}`)
}else if (hour >=13 && hour <=17){
    console.log(`Good afternoon ${user}`)
}else {
    console.log(`Good night ${user}`)
}
};

let hour = 18
// let user1 = "Mason";
// let user2 = "Jade";
// let user3 = "Charlie";
const night = 1
const day = 8
const afternoon = 15

timeCounter(night, "Mason")
timeCounter(day, "Jade")
timeCounter(afternoon, "Charlie")
