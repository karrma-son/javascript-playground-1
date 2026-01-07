
function timeCounter(hour){
if (hour >= 6 && hour <=12){
    console.log("Good morning")
}else if (hour >=13 && hour <=17){
    console.log("Good afternoon")
}
else {
    console.log("Good night")
}
};


const night = 1
const day = 8
const afternoon = 15

timeCounter(night)
timeCounter(day)
timeCounter(afternoon)
