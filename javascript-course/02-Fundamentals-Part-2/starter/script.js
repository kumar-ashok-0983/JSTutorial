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