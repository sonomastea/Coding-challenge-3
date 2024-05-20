//Car Class Implementation Challenge
//Step 1 
//Implement a car class with a constructor that that initializes the make and speed properties 
class car{
    constructor(make,speed){
    this.make= make;
    this.speed= speed;
    }


 //Step 2
 //Implement an accelerate method in the car class that increases the car's speed and logs the new speed to the console
accelerate() {this.speed +=10; console.log('New Spees: $ {this.speed} km/h');}
}
