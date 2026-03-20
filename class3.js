class License {
    type;
    duration;
    state; 
    name;
    age;
    instated;

    constructor(type, duration, state, name, age, instated){
        this.type = type;
        this.duration = duration;
        this.state = state;
        this.name = name;
        this.age = age;
        this.instated = instated;
    }

    info(){
        console.log(this.type, this.duration, this.state, this.name, this.age, this.instated)
        if (this.type !== "Driving" || this.instated === false) {
            console.log(`Dear ${this.name}, you must reinstate your Driver's license to proceed.`)
        } else {
            console.log(`Proceed ${this.name}`);
        }
    }
}

class Clearance extends License {
    constructor(type, duration, state, name, age, instated, level, active, review) {
        //passing to parent elements
    super(type, duration, state, name, age, instated);
        this.level = level;
        this.active = active;
        this.review = review;
    }
    
    childInfo(){
        super.info();
        if(this.type === "Driving" && this.active && this.instated) {
            this.allowed();
        }
    }

    allowed(){
        
        console.log(this.level, this.active, this.review)
    }
 
}



const license1 = new Clearance("Fishing", 12, "IL", "Mark", 33, true, "Secret", true, false);
const license2 = new Clearance("Driving", 62, "IL", "Matt", 33, false, "none", false, false);

// license1 = new Clearance("")
// let clearance1 = new Clearance("Secret", true, false)

license1.childInfo()
license2.childInfo()

// clearance1.allowed();