
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName)
console.log(firstName);

//Variable name conventions
let Jonas_Matilda = 'jm';
let $function = 27;

let PI = 3.1415;
let person = "jonas";

let myFirstJob = "Programmer";
let myCurrentJob = 'Teacher';

console.log(myFirstJob)

let country = 'Portugal';
let continent = 'Europe';
let population = '10';

console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

let isIsLand = false;
let langueage;

console.log(typeof isIsLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';


// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = '2037';

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years ' + ' ' + 'old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with
multiple lines`);

const osiem = 8;
const age = 17;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 20;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}
    
const age = 18;
if (age === 18) console.log('You just became an adult(strict)');
if (age == 18) console.log('You just became an adult(loose)');

const favourite = Number(prompt("What's you favourite number?"));
console.log(favourite);

if (favourite == 524355234) {
    console.log('cool! 524355234 is good number!');
} else if (favourite === 7) {
    console.log('7 is ok');
} else {
    console.log('Number is not 524355234 and 7');
}

if (favourite !== 524355234) console.log('why not 524355234?');
*/
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}