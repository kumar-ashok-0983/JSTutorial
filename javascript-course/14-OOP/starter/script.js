'use strict';

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ashok = new Person('Ashok', 1983);
const shilpi = new Person('Shilpi', 1984);
console.log(ashok);

console.log(ashok instanceof Person);
console.log(Person.prototype);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

ashok.calcAge();
shilpi.calcAge();

console.log(ashok);

console.log(ashok.__proto__);
console.log(shilpi.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ashok));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.__proto__);

Person.prototype.species = 'Homo Sapience';
console.log(ashok.species);

console.log(ashok.hasOwnProperty('firstName'));
console.log(ashok.hasOwnProperty('species'));

console.log(ashok.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`Previous speed was ${this.speed}`);
  this.speed += 10;
  console.log(`Speed after acceleration ${this.speed}`);
};

Car.prototype.brake = function () {
  console.log(`Previous speed was ${this.speed}`);
  this.speed -= 5;
  console.log(`Speed after acceleration ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
