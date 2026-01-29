'use strict';

// Constructor Function  //
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.hey = function () {
  console.log('I am a static method');
};
const roopa = new Person('Roopa', 1983);
console.log(Person);
console.log(roopa);
console.log(roopa.__proto__);
roopa.calcAge();
console.log(Person.prototype);
Person.hey();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

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

  static hey1() {
    console.log(`I am class static method `);
  }
}

const sid = new personCl('Sid', 1978);
console.log(sid);
sid.calcAge();
personCl.hey1();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class carCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 5));
  }
}

const ford = new carCl('Ford', 120);
console.log(ford.speed);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford.speed);
ford.accelerate();
ford.brake();

// Practise OOPS concepts

const Book = function (title, pages) {
  this.title = title;
  this.pages = pages;
};

const harryPotter = new Book('Harry Potter', 200);
const dictionary = new Book('Dictionary', 3000);
const geeta = new Book('Geeta', 1000);

Book.prototype.read = function () {
  console.log(`this is ${this.title}`);
};
console.log(harryPotter, dictionary, geeta);
harryPotter.read();
dictionary.read();
geeta.read();

Book.prototype.summary = function () {
  console.log(`this is summary of ${this.title}`);
};

harryPotter.summary();

// ES6 Classes

class playList {
  constructor(name, songs) {
    this.name = name;
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  play() {
    console.log(`${this.name} playlist is being played`);
  }
}

const abcPlayList = new playList('pop', [1, 2, 3]);
const playList2 = new playList('classic', [4, 5, 6]);
console.log(abcPlayList, playList2);

abcPlayList.play();
playList2.play();
abcPlayList.addSong(1);
playList2.addSong(7);

console.log(abcPlayList.play === playList2.play);

playList2.play = function () {
  console.log(`${this.name} is a altered instance method`);
};

console.log(abcPlayList.play === playList2.play);

// Getters and Setters

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    console.log(`area = ${this.width * this.height}`);
  }

  set widthNum(width) {
    width > 0
      ? (this.width = width)
      : console.log('Please enter a positive number for width');
  }

  set heightAbs(h) {
    this.height = Math.abs(h);
  }
}

const rect = new Rectangle(1.3, 7.5);
rect.area;
console.log(rect);
rect.widthNum = 2.2;
console.log(rect);
rect.area;
rect.heightAbs = 6.8;
console.log(rect);
rect.area;

// Object.create

const animalProto = {
  eat() {
    console.log(`this is eat method`);
  },

  sleep() {
    console.log(`this is sleep method`);
  },
};

const dog = Object.create(animalProto);
dog.bark = function () {
  console.log('this is bark method');
};

console.log(dog);
dog.bark();
dog.eat();
dog.sleep();

// Static methods

class MathUtils {
  static square(n) {
    console.log(n * n);
  }

  static randomBetween(min, max) {
    console.log(Math.random() * min);
    console.log(Math.random() * max);
  }
}

const a = new MathUtils();
console.log(a);
MathUtils.square(2);
MathUtils.randomBetween(2, 6);
console.log(a);

// Timer example

const Timer = function (seconds) {
  this.seconds = seconds;
};

Timer.prototype.start = function () {
  console.log('Timer started !');
};

class TimerCl {
    constructor(seconds) {
        this.seconds = seconds;
    }

    // get minutes() {
    //    return this.seconds/60;
    // }

    set minutes(minutes) {
        this.seconds = minutes * 60;
    }

    static compare(t1, t2) {
       return t1.seconds > t2.seconds ? console.log('Timer1 is greater') : console.log('Timer2 is greater');
    }
}

const t1 = new Timer(600);
t1.start();
console.log(t1);
const t2 = new TimerCl(300);
console.log(t2);
t2.minutes;
t2.minutes= 9;
console.log(t2);
TimerCl.compare(t1, t2);