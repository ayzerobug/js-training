const exp = 10 ** 5;
console.log(exp);

let firstNumber = 10;
firstNumber += 5;
console.log(firstNumber);

let secondNum = 10;
secondNum -= 5;
console.log(secondNum); // 5

let thirdNumber = 6;
thirdNumber *= 3;
console.log(thirdNumber);

let fourthNumber = 14;
fourthNumber /= 2; // 7
console.log(fourthNumber);

fourthNumber++;
console.log(fourthNumber);

secondNum--;
console.log(secondNum);

const age = 20;
const hasId = true;

// && (AND) -> Both Conditions has to be true
// || (NOT) -> At least one condition has to be true

// !true -> false
// !false -> true

// AND — both must be true
console.log(age >= 18 && hasId); // true
console.log(age >= 18 && !hasId); // false

// OR — at least one must be true
console.log(age >= 18 || hasId); // true (both true)
console.log(age < 18 || hasId); // true (one is true)

console.log(!hasId); //false (flip actual value)
console.log(!false); // true

const isAtAyomideAtHome = false;
const isNeigborAtHome = true;

// If any of these conditions are met, you are performing the same actions
// if (isAtAyomideAtHome || isNeigborAtHome){
//     console.log("Drop it at their gate");
// }

// You're performing different actions based on the condition.
if (isAtAyomideAtHome) {
  console.log("Giving him the package...");
} else if (isNeigborAtHome) {
  console.log(
    "Ayomide is not at home, but we found his neigbour, we giving his neighbor the package.",
  );
} else {
  console.log("Ayomide is not at home, returning package back to the store");
}

const score = 72;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

const hasReservation = true;
const restaurantOpen = true;

if (age >= 18 && hasReservation && restaurantOpen) {
  console.log("Welcome to Àṣà Kitchen!");
} else {
  console.log("Sorry, we cannot seat you right now.");
}

const isMember = false;
const hasVoucher = true;

if (isMember || hasVoucher) {
  console.log("10% discount applied!");
}
