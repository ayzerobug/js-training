const customer = {
  name: "Ayomide",
  age: 10,
  city: "Lagos",
  hasReservation: true,
};

// console.log(customer)
console.log(customer.name);

const field = "age";
console.log(customer[field]);

customer.age = 40;
console.log(customer.age);

customer.accountBalance = 20000;
console.log(customer);

const restaurant = {
  name: "Àṣà Kitchen",
  city: "Lagos",
  rating: 4.8,
  greet: function () {
    console.log("Welcome to Asa Kitchen");
  },
  menu: ["Egusi Soup", "Jollof Rice", "Suya Platter"],
  customers: [
    { name: "Ayomide", totalOrders: 10, isBanned: false },
    { name: "Benjamin", totalOrders: 250, isBanned: false },
    { name: "Leonard", totalOrders: 5, isBanned: false },
    { name: "Morolayo", totalOrders: 3, isBanned: true },
  ],
};

console.log(restaurant);

restaurant.greet();

console.log(restaurant.name);
console.log(restaurant.rating);

console.log(restaurant.menu);

console.log(restaurant.customers.length);
// console.log(restaurant.customers[0].name);

for (const customer of restaurant.customers) {
  console.log(
    `${customer.name} — Total Orders ${customer.totalOrders} — Is Banned: ${customer.isBanned}`,
  );
}

const students = [
  { name: "Ayomide", email: "ayomide@gmail.com", plan: "free" },
  { name: "Emeka", email: "emeka@gmail.com", plan: "premium" },
  { name: "Fatima", email: "fatima@gmail.com", plan: "enterprise" },
];

