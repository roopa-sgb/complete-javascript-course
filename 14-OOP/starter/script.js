'use strict';

// Constructor Function  //
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
    console.log(2037-this.birthYear);
}
const roopa = new Person('Roopa', 1983);
console.log(Person);
console.log(roopa);
console.log(roopa.__proto__);
roopa.calcAge();
console.log(Person.prototype);


const Car = function (make,speed) {
    this.make = make;
    this.speed = speed;   
}

Car.prototype.accelerate = function () {
    console.log(this.speed + 10);
}

Car.prototype.brake = function () {
    console.log(this.speed - 5);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

// ES6 CLASSES  //
 
class personCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        const age = 2037 - this.birthYear;
        console.log(`${this.firstName} is ${age} years old`);
    }
}

const sid = new personCl('Sid', 1978);
console.log(sid);
sid.calcAge();