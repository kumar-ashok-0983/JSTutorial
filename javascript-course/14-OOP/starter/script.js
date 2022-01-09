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

/*
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

*/

/*

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1983;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const Sarah = Object.create(PersonProto);
Sarah.init('Sarah', 1979);
Sarah.calcAge();

*/

/*
class CarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  get speed() {
    return this._speed / 1.6;
  }

  set speed(speed) {
    this._speed = speed * 1.6;
  }

  accelerate() {
    console.log(`Previous speed was ${this.speed}`);
    this.speed += 10;
    console.log(`Speed after acceleration ${this.speed}`);
  }

  brake() {
    console.log(`Previous speed was ${this.speed}`);
    this.speed -= 5;
    console.log(`Speed after brake ${this.speed}`);
  }
}

const bmw = new CarCl('Ford', 120);
console.log(bmw.speed);
bmw.accelerate();
bmw.brake();
bmw.speed = 50;
console.log(bmw.speed);
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1983;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1984);
sarah.calcAge();
*/

/*
const carProto = {
  get speedUS() {
    return this.speedKMH / 1.6;
  },

  set speedUS(speedMPH) {
    this.speedKMH = speedMPH * 1.6;
  },
};

const bmw = Object.create(carProto);
bmw.speedUS = 100;
console.log(bmw.speedUS);
*/

/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} amd I study ${this.course}`);
};

const mike = new Student('Mike', 2002, 'Computer Science');
mike.introduce();
mike.calcAge();

*/

/*

const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Speed after acceleration ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Speed after brake ${this.speed}`);
};

const EV = function (model, speed, charge) {
  Car.call(this, model, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.model} going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const eletricCar = new EV('Tesla', 100, 92);
eletricCar.chargeBattery(98);
eletricCar.accelerate();
eletricCar.brake();
eletricCar.accelerate();

*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
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
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} amd I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old but as a student I feel more like ${
        2021 - this.birthYear - 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 1984, 'Computer Science');
martha.introduce();
martha.calcAge();

*/

/*

class Account {
  locale = navigator.language;
  #movement = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening the account, ${this.owner}`);
  }
  deposit(val) {
    this.#movement.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(100);

console.log(acc1);

acc1.deposit(100).withdraw(200).requestLoan(500).withdraw(300);

*/

/*

class CarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  get speed() {
    return this._speed / 1.6;
  }

  set speed(speed) {
    this._speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Speed after acceleration ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Speed after brake ${this.speed}`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(model, speed, charge) {
    super(model, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;

    console.log(
      `${this.model} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );

    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate();
rivian.brake();
rivian.chargeBattery(92);
rivian.accelerate();
rivian.brake().accelerate().chargeBattery(95);
rivian.accelerate();

console.log(rivian.speed);

rivian.speed = 100;
console.log(rivian.speed);

*/
