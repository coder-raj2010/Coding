/*  Values and Variables
let js = "GREAT";
console.log(46 + 8 + 23 - 10)

console.log("Hello World, I am a JavaScript 'Hello World Programme'")
console.log(45)

let firstName = 'Rajveer';

console.log(firstName)
console.log(firstName)
console.log(firstName)

// Variable Name Conventions
let Rajveeer_Saxena = "RS";
let $function = 234;

let person = 'JONAS';
let PI = 3.14;

let myFirstSport = 'Cricket';
let mysecondSport = 'Football';

let Sport1 = 'Cricket';
let Sport2 = 'Football';

console.log(myFirstSport);


// Data Tpes (Primitive)
let jsIsFun = true;
console.log(jsIsFun)

// console.log(typeof true)
console.log(typeof jsIsFun)
// console.log(typeof 23)
// console.log(typeof 'Rajveer')

jsIsFun = 'Yes!';
console.log(typeof jsIsFun)

let age;
console.log(age)
console.log(typeof age)

age = 48;
console.log(typeof age);

console.log(typeof null)


// Let,Const,Var

let age = 15;
age = 16;

const birthYear = 2025
// birthYear = 2026
// const job;

var job = 'learner';
job = 'programmer';

lastNAme = 'Saxena'
console.log(lastNAme)


// Basic Operaters
//Arithmatic Operator

const now = 2023
const ageKartikey = now - 2003
const ageRajveer = now - 2010
console.log(ageKartikey, ageRajveer)

console.log(ageKartikey * 2, ageKartikey / 2, ageRajveer * 2, ageRajveer / 2, ageRajveer * 2 ** 3)
//2 ** 3 means 2 cube = 8

const firstName = 'Rajveer';
const lastName = 'Saxena';
console.log(firstName + ' ' + lastName)

// assignment operators
let x = 10 + 5; // 20
x += 10; // x = x + 10 = 30
x *= 4 // 120
x++;
x--;
x--;
console.log(x);


// Comparision Operator (It can only a boolean value) // we have <, >, >=, <=
console.log(ageKartikey > ageRajveer) // true
console.log(ageRajveer >= 18)

const isFullAge = ageRajveer >= 18;

console.log(now - 2003 > now - 2010)


// Operator Precedence
const now = 2023
const ageKartikey = now - 2003
const ageRajveer = now - 2010

console.log(now - 2003 > now - 2010)

console.log(40 + 40 + 40 + 40 + 50 + (60 + 60 / 8))

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 // both x and y will be 10 onlys
console.log(x, y)

const averageAge = (ageKartikey + ageRajveer) / 2 // based on BODMAS
// console.log(averageAge)
console.log(ageKartikey, ageRajveer)


// Strings and Templates Literals
const personName = 'Rajveer';
const birthYear = 2010;
const job = 'learner';
const year = 2023;

const rajveer = "I'm " + personName + ', a ' + (year - birthYear) + ' years old ' + job + ' 😁!'
console.log(rajveer)

// Templates String
const rajveerNew = `I'm ${personName}, a ${year - birthYear} years old ${job} 😁!`;
console.log(rajveerNew)

console.log(`Just a regular string`)

console.log('String with\n\
multiple \n\
lines');


// By Templates String
console.log(`String with
multiple
line
with
string
teplates`)

// with old method
/* console.log(`String with \n\
multiple \n\
line \n\
with \n\
string \n\
teplates`)



// if/else statements

// The cunstruction bolck code 👎

// if (here condition comes) {
// here the upcoming result comes
// } else {

// }

const age = 7;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Rajveer can start driving 🚗!`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Rajveer is too young, wait for another ${yearsLeft} years :)`)
}

const birthYear = 1975;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)
*/c


// Type Conversion
const inputYear = '2010';
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);

const no = 2010;
console.log(String(no));
console.log(String(no) + 18);

console.log(Number('Rajveer')); // Nan = Not a Number
console.log(typeof NaN) // number


// Type Coersion
// We can use all the operators excluding '+' sign
console.log("I'm " + 13 + ' years old');
console.log("I'm " + String(13) + ' years old');
console.log("I'm " + '13' + ' years old');
console.log(3 - '10' - '23'); // -30

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n) // 10

console.log(2 + 5 + 1 + '9');


// Truthy and Falsy Values (comes under Booleans)
// 5 falsy values 👎
//  0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Rajveer'));
console.log(Boolean({}));
console.log(Boolean(56656));

const money = 0;

if (money) { // in the () js try to make it a boolean 
    console.log('You have some money');
} else {
    console.log("You don't have money")
}
// console.log(money)

let height;

if (height) {
    console.log('YAY ! Height is defined');
} else {
    console.log('Height is not defined :(');
}



// Equality Operator
const age = 18;
if (age === 18) console.log('You just became adult :)');
console.log('hello age')
console.log(`hello  world is a keyword in`)
