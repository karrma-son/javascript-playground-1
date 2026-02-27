
var largestAltitude = function(gain) {
    let counter = 0;
    let higher = [0];
    let highest = [0]


    for (let i = 0; i<gain.length; i++){
        counter += gain[i];
        higher.push(counter)   
    }
    for (let j = 0; j<=higher.length; j++){
        if (highest[0]<higher[j]){
            highest.pop()
            highest.push(higher[j])
            
        }
        
    }
    console.log(highest[0])
};

let gain1 = [-5,1,5,0,-7]
let gain2 = [-4,-3,-2,-1,4,3,2]

largestAltitude(gain1)
largestAltitude(gain2)