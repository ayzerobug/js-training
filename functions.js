function greet(name) {
  console.log(`${name}, you are welcome to our website`);
}

greet("Ayomide");
greet("Emeka");
greet("Victor Williams");
greet("Fatima");

function addToCart(customerName, dish, price = 2500) {
  console.log(`${customerName} added ${dish} of ₦${price} to cart`);
}

addToCart("Ayomide", "Fried Rice", 3000);
addToCart("Fatima", "Beans & Plantain", 6000);
addToCart("Ruth", "Semo");

function addNumber(firstNum, secondNum) {
  const total = firstNum + secondNum;
  return total;
}

const addition1 = addNumber(14, 3);
const addition2 = addNumber(2, 6);

console.log(addition2);

function userIsAnAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const isSamuelAnAdult = userIsAnAdult(21);
const isMatthewAnAdult = userIsAnAdult(16);

console.log("Sam is an adult", isSamuelAnAdult);
console.log("Mathew is an adult", isMatthewAnAdult);

const customerAge = 38;
if (userIsAnAdult(customerAge)) {
  console.log("User is an adult, you can proceed with onboarding.");
} else {
  console.log("User is underage, abort onboarding.");
}

console.log(userIsAnAdult(61));

function anotherFunction() {
  // some random thing;
}

console.log(anotherFunction());

console.log("=============BREAKPOINT===============");

const ayomideTotal = getTotalBill(4500, 2);
console.log(ayomideTotal); // 9900

const emekaTotal = getTotalBill(6000, 1);
console.log(emekaTotal); // 6600

const fatimaTotal = getTotalBill(5500, 3);
console.log(fatimaTotal); // 18150

function getTotalBill(price, quantity) {
  const subtotal = price * quantity;
  const charge = subtotal * 0.1;
  return subtotal + charge;
}

// 0.10 -> 0.1
// 0.1000000 -> 0.1
// 0.009 -> 0.009
// 0.05 -> 0.05
// .05 -> 0.05
// .1 -> 0.1