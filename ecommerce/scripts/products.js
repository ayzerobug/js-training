export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 25000,
    emoji: "&#x1F3A7;",
  },
  {
    id: 2,
    name: "Running Sneakers",
    category: "Footwear",
    price: 18000,
    emoji: "&#x1F45F;",
  },
  {
    id: 3,
    name: "Leather Backpack",
    category: "Bags",
    price: 32000,
    emoji: "&#x1F392;",
  },
  {
    id: 4,
    name: "Sunglasses",
    category: "Accessories",
    price: 12000,
    emoji: "&#x1F576;&#xFE0F;",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 45000,
    emoji: "&#x231A;",
  },
  {
    id: 6,
    name: "Perfume",
    category: "Beauty",
    price: 8500,
    emoji: "&#x1F9F4;",
  },
  {
    id: 7,
    name: "Oraimo Headset",
    category: "Headset",
    price: 42000,
    emoji: "&#x1F3A7;",
  },
];

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};
