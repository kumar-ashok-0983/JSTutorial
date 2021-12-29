/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Ashok');
console.log(23);

let firstName = 'Jenny';

console.log(firstName);
console.log(firstName);
console.log(firstName);

*/

// LECTURE: Values and Variables
/*
const country = "United Kingdom";
const continent = "Europe";
let population = 80;

console.log(country);
console.log(continent);
console.log(population);
*/

/*

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "string");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);


let year;
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)
console.log(typeof year)

console.log(typeof null)
*/

// LECTURE: Data Types
/*
const isIsland = true;
const language = 'English';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = 'teacher'
*/

// LECTURE: let, const and var

/*
population = 81
*/

/*
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI;

markHigherBMI = bmiMark > bmiJohn
console.log('markHigherBMI : ' + markHigherBMI)

*/

/*
const firstName = 'Ashok';
const job = 'programmer';
const birthYear = 1983;
const currentYear = 2037;

const ashokNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(ashokNew);
console.log(`Just a normal string to print in the console...`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String with multiple
line without the 
new line character`)
*/

/*
const inputYear = "1991";
console.log(inputYear + 19);
console.log(Number(inputYear) + 19);

console.log(Number('Ashok'));

console.log(String(23), 23);

console.log('23' - '13' - 12);
console.log('23' + '13' + 12);

console.log(5 + 10 + 15 + '20');
console.log('10' - '5' + '3' + 20);
*/

/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('Ashok'));
console.log(Boolean({}));

const money = 100;

if (money) {
    console.log(`don't spend it all`)
} else {
    console.log(`you should get a job!`)
}

let height;

if (typeof height) {
    console.log(`Height is defined`);
} else {
    console.log('Height is not defined')
}

*/

/*
let age = 18

if (age == 18) console.log(`You just became an adult (loose)`);
if (age === 18) console.log(`You just became an adult (strict)`);

const favourite = Number(prompt(`input your favourite number`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`23 is an amazing number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`input number is not 7 or 23`);
}

if (favourite !== 23) {
    console.log(`Why not 23?`)
}
*/

/*
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 80;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 50;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphines win. Dolphins average: ${dolphinsAverage} & Koalas average: ${koalasAverage}`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log(`Koalas win. Dolphins average: ${dolphinsAverage} & Koalas average: ${koalasAverage}`);
} else if (dolphinsAverage === koalasAverage && koalasAverage >= 100 && dolphinsAverage >= 100) {
    console.log(`Match is a draw. Dolphins average: ${dolphinsAverage} & Koalas average: ${koalasAverage}`);
} else {
    console.log(`No one wins. Dolphins average: ${dolphinsAverage} & Koalas average: ${koalasAverage}`);
}
*/

/*

const age = 23;
age >= 18 ? console.log(`I like to drink wine `) : console.log(`i like to drink water`);

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);

*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip}, total bill ${bill + tip}`);
