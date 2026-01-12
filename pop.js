//make an array of student names - which is the classroom name
// rollcall function all students
// keep naming the students until no longer 
// decrementing through until no  
// while students are in the class keep naming 

// let list1 = [1, 3, 6, 8]

// function pop1(list){
//    console.log( list.pop());
//     console.log(list)

// }


// pop1(list1)



let class1 = ["Mason", "Jade", "Uyi", "Dustin", "Good", "Joker", "Karm"]



function rollcall(classRoom){
    while (classRoom.length > 0){
        console.log(classRoom.pop())
    }
}

rollcall(class1)