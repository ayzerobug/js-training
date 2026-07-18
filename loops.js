// Print a welcome message for 5 tables — without a loop
// console.log("Welcome, Table 1!");
// console.log("Welcome, Table 2!");
// console.log("Welcome, Table 3!");
// console.log("Welcome, Table 4!");
// console.log("Welcome, Table 5!");

// for (let i = 1; i <= 5; i++) {
//   console.log(`Welcome, Table ${i}!`);
// }

// for (start; condition; update){
//     // action
// }

// for (let count = 0; count <= 500; count += 5) {
//   console.log("Current count", count);
// }

function getTotalBill(price, quantity) {
  const subtotal = price * quantity;
  return subtotal + subtotal * 0.1;
}

// for (let qty = 1; qty <= 3; qty++) {
//   const bill = getTotalBill(4500, qty);
//   console.log(`${qty} plate(s) of Egusi: ₦${bill}`);
// }

let stockQuantity = 3;

// while (stockQuantity > 0) {
//   console.log(`${stockQuantity} of this keyboard still available`);
//   stockQuantity--;
// }

let budget = 15000;
const dishPrice = 4500;
let plates = 0;

while (budget >= dishPrice) {
  budget -= dishPrice;
  plates++;
}

// console.log(`You can afford ${plates} plates`);   // You can afford 3 plates
// console.log(`Change left: ₦${budget}`);           // Change left: ₦1500

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Found loop 3, stopping here");
    break;
  }
  console.log(`{Break} Welcome, Table ${i}!`);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`{Continue} Welcome, Table ${i}!`);
}
