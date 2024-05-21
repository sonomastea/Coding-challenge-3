//Car Class Implementation Challenge
//Step 1 
class Car { 
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;

    }
    //Step 2
    accelerate() {
        this.speed += 10;
        console.log (`New speed: $
        {this.speed} km/h`);
        }

    //Step 3

    brake() {
        this.speed -=5;
        console.log(`New speed: $
        {this.speed} km/h `);

    }
    
}
//Step 4
const car1 = new Car(`BMW`, 120);
console.log (`Car 1: ${car1.make}), 
starting speed: ${car1.speed} km/h `);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();

const car2 = new Car(`Mercedes`,95);
console.log (`Car 2 : ${car2.make},
starting speed: ${car2.speed} km/h `);
car2.accelerate();
car2.brake();
car2.brake();
car2.accelerate();


