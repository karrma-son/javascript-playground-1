class Brand {
    constructor(brand){
        this.brand = brand
    }
}
class Make extends Brand {
    constructor(brand,make) {
        super(brand);
        this.make = make
    }
}
class Car extends Make{
    constructor(brand,make,year){
        super(brand,make)
            this.year = year
    }
       displayInfo(){
        console.log(`${this.brand} ${this.make} ${this.year}`)
    }
}

class Vehicle {
    brand;
    make;
    year;
    speed;
    constructor(brand, make, year, speed){
        this.brand = brand;
        this.make = make;
        this.year = year;
        this.speed = speed;
    }
    displayInfo(){
            console.log(`${this.brand} ${this.make} ${this.year} Speed: ${this.speed} mph`)
        }
        go(){
            this.speed += 5

            if (this.speed > 200){
                this.speed = 200; 
            }
        }
    brake(){
       this.speed -= 5


        if (this.speed < 0){
            this.speed = 0;

        }
    }
}

let car1 = new Car("Toyota", "Tacoma", 2022);
let car2 = new Vehicle("Hyundai", "Santa Fe", 2012, 55)

car1.displayInfo();

car2.go();
car2.go();
car2.brake()

car2.displayInfo()