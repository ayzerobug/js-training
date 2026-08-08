import { getProductById } from "./products.js";
import { renderCart } from "./render.js";

let cart = [];

export const addToCart = (productId) => {
  const actualProduct = getProductById(productId);

  const existing = cart.find((item) => item.id === actualProduct.id);

  if (existing) {
    existing.quantity++;
  } else {
    const item = { ...actualProduct, quantity: 1 };
    cart.push(item);
  }

  renderCart();
};

export const addManyToCart = (...products) => {
  for (const product of products) {
    addToCart(product);
  }
  console.log(`Added ${products.length} items to cart`);
};

export const removeFromCart = (productId) => {
  const index = cart.findIndex((item) => item.id === parseInt(productId));
  if (index !== -1) {
    // Means Item is found
    cart.splice(index, 1);
  }
  renderCart();
};

export const clearCart = () => {
  cart = [];
}

export const getCart = () => cart;

export default cart;
