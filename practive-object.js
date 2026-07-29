const restaurant = {
  name: "Asa Kitchen",
  city: "Abuja",
  rating: 4.6,
  isOpen: true,
  describe: function () {
    console.log("Welcome to Asa Kitchen, we are ready to take your orders.");
  },
  menu: [
    { name: "Jollof Price", price: 4000 },
    { name: "Fried Price", price: 3200 },
    { name: "Pounded Yam", price: 4500 },
    { name: "Sharwama", price: 2500 },
  ],
};

restaurant.describe();

console.log(restaurant.menu[0].name);