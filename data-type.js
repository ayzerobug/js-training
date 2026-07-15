const single = "Hello World"; // Single Quote
const double = "Hello World"; // Double Qoute
const backtick = `Hello World`; // Backticks

// Real examples
const name = "Ayomide";
const city = "Lagos";
const restaurant = "Àṣà Kitchen";

// console.log(name);
// console.log(restaurant);

const firstName = "Ayomide";
const lastName = "Oludare";

const fullName = firstName + " " + lastName;

// console.log(fullName);

const greetings = `Hello, my name is ${firstName} ${lastName}`;

// console.log(greetings);

// console.log(firstName.length);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

const doesNameIncludeText = firstName.includes("mide");
// console.log(doesNameIncludeText);

const age = 25;
const price = 5500;
const rating = 4.5;
const temperature = -3;

// console.log(age);
// console.log(price);

const numA = 10;
const numB = 3;

// console.log(numA * numB);
// console.log(numA + numB);
// console.log(numA - numB);
// console.log(numA / numB);
// console.log(numA % numB);

const isOpen = true;
const isLoggedIn = false;
const hasReservation = true;

// console.log(isOpen);
// console.log(isLoggedIn);
// console.log(hasReservation);

// > (Greater Than)
// < (Less Than)
// >= (Greater Than OR Equal To)
// <= (Less Than OR Equal To)
// == (Is Equal To)
// === (Is Equal To - Strict)

// ! (NOT)
// != (Not Equal to)
// !== (Not Equal To - Strict)

console.log(10 > 5);
console.log(8 >= 5);
console.log(5 > 5);
console.log(5 >= 5);

console.log(3 < 5);
console.log(3 > 5);
console.log(3 <= 5);
console.log(5 < 5);
console.log(5 <= 5);

console.log(5 == 5);
console.log(10 == 5);
console.log("3" == 3);
console.log("3" === 3);

console.log(3 != 5);
console.log("3" !== 3);

let userName;
console.log(userName);

userName = "Ayzerobug";
console.log(userName);

userName = null;
console.log(userName);

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof "James");

const input = "100";
console.log(typeof input);

const num = Number(input);
console.log(num);
console.log(typeof num);

const secondNum = 10;
const sum = num + secondNum;
console.log(sum);

const priceText = String(price);
console.log(priceText);
console.log(typeof priceText);


console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));

const rate = "1450.49"; // String
const rateInt = parseInt(rate);
console.log(rateInt);

const rateFloat = parseFloat(rate);
console.log(rateFloat);