'use strict'

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const private = 'Audio';
*/

/*

function logger() {
    console.log("My name is Ashok")
}

logger();
logger();
logger();

function makeSomeJuice(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

}

const appleJuice = makeSomeJuice(5, 0);
console.log(appleJuice)

const orangeJuice = makeSomeJuice(0, 4);
console.log(orangeJuice)

const mixJuice = makeSomeJuice(2, 4);
console.log(mixJuice)

*/

/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991)
console.log(age1, age2);

const calcAge3 = birthyear => 2037 - birthyear
const age3 = calcAge3(1983);
console.log(age3)

const yearToRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearToRetirement(1983, 'Ashok'));
console.log(yearToRetirement(1980, 'Bob'));
*/

/*

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) return "Dolphins";
    if (avgKoalas >= avgDolphins * 2) return "Koalas";
    return "no winner"
}

console.log(`${checkWinner(avgDolphins, avgKoalas)} wins (${avgDolphins} vs. ${avgKoalas})`);
*/

/*
const friends = ["Ashok", "Jayany", "Shilpi"];
console.log(friends);

const years = new Array(1991, 1984, 2020, 2021);
console.log(years[2]);

console.log(friends.length);
console.log(years.length)

console.log(friends[friends.length - 1]);

friends[2] = "Shrinjal"
console.log(friends[friends.length - 1]);

const firstName = "Ashok"
const ashok = [firstName, "Mishra", 2021 - 1983, 'Engineer', friends]
console.log(ashok)

const calcAge3 = birthyear => 2037 - birthyear
*/

/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);
*/

/*
const ashok = {
    firstName: "Ashok",
    lastName: "Mishra",
    birthYear: 1983,
    profession: 'Engineer',
    calcAge: function () {
        this.age = 2021 - this.birthYear;
    },
    hasDriversLicense: false,
    summary: function () {
        this.calcAge();

        return `${this.firstName} is a ${this.age}-year old ${this.profession}, and ${this.hasDriversLicense ? "he has a driver's license" : "he has no driver's license"}`
    }
};

console.log(ashok.summary());
*/

/*
const objectMark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const objectJohn = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

if (objectMark.calcBMI() > objectJohn.calcBMI()) {
    console.log(`${objectMark.fullName}'s BMI (${objectMark.bmi}) is higher than ${objectJohn.fullName}'s BMI (${objectJohn.bmi})`)
} else if (objectMark.calcBMI() < objectJohn.calcBMI()) {
    console.log(`${objectJohn.fullName}'s BMI (${objectJohn.bmi}) is higher than ${objectMark.fullName}'s BMI (${objectMark.bmi})`)
} else {
    console.log(`${objectJohn.fullName}'s BMI (${objectJohn.bmi}) is equal to the ${objectMark.fullName}'s BMI (${objectMark.bmi})`)
}
*/

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}
*/

/*
const ashok = [
    "Ashok",
    "Mishra",
    2021 - 1983,
    'Engineer',
    ['Jay', 'Shilpi', 'Shrinjal']
];

const types = [];

for (let i = 0; i < ashok.length; i++) {
    console.log(ashok[i], typeof ashok[i]);
    types.push(typeof ashok[i]);
}

console.log(types);

for (let i = 0; i < ashok.length; i++) {
    if (typeof ashok[i] !== 'string') continue;
    console.log(ashok[i], typeof ashok[i]);
}

for (let i = 0; i < ashok.length; i++) {
    if (typeof ashok[i] === 'number') break;
    console.log(ashok[i], typeof ashok[i]);
}

*/

/*

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
}


const calcAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

    console.log(`Bill amount: ${bills[i]}, tip : ${tips[i]}, total amount to pay: ${totals[i]}`);
}

console.log(calcAvg(bills));
console.log(calcAvg(tips));
console.log(calcAvg(totals));
*/
