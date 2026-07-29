// function greet() {
//   return "Hello World"
// }

// const greet = () => {
//   return "Hello World New";
// };

const greet = (name) => `Welcome back ${name}`;

// alert(greet("Ayomide"));

const getTotalBill = (price, quantity) => {
  const subtotal = price * quantity;
  return subtotal + subtotal * 0.1;
};

console.log(getTotalBill(4500, 2)); // 9900

console.log("========DESTRUCTURING===========");

const customer = { name: "Ayomide", table: 3, paid: true };

// const name = customer.name;
// const table = customer.table;

const { name, table } = customer;

console.log(name);
console.log(table);

const menu = ["Egusi Soup", "Jollof Rice", "Suya Platter", "Bread", "Yam"];

// const first = menu[0];
// const second = menu[1];

const [firstMenu, secondMenu] = menu;

console.log(firstMenu);
console.log(secondMenu);

console.log("========SPREAD OPERATORS===========");

const extendedMenu = [...menu, "Pounded Yam", "Coconut Rice"];
console.log(extendedMenu);

console.log(customer);

const reservationDetails = {
  hasReservation: true,
  dateReserved: "29-07-2026",
};
const newCustomer = { ...customer, ...reservationDetails };

console.log(newCustomer);
