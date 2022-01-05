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

Person.hey = function () {
  console.log('Hey there, what up?');
  console.log(this);
};

Person.hey();

*/

/*
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

*/

/*
const accounts = {
  owner: 'Ashok',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(accounts.latest);
accounts.latest = 50;
console.log(accounts.movements);
*/

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.firstName);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey whats up');
    console.log(this);
  }
}

const shilpi = new PersonCl('Shilpi Aggarwal', 1984);
console.log(shilpi);
console.log(shilpi.age);

console.log(shilpi.__proto__ === PersonCl.prototype);

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

//
