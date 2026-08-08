// import { products, getProductById } from "./products.js";
import { clearCart, } from "./cart.js";
import { renderProducts, renderCart } from "./render.js";

// console.log(products);
// console.log(getProductById(2));

// addToCart(getProductById(3));
// console.log(getCart());

// console.log(cart);

// const productsToOrder = [products[0], products[1], products[3], products[4]];
// addManyToCart(...productsToOrder);
// console.log(getCart());

// const orderSummary = (customerName, ...dishes) => {
//   console.log(`${customerName} ordered:`);
//   for (const dish of dishes) {
//     console.log(`  - ${dish}`);
//   }
// };

// orderSummary("Ayomide", "Rice", "Tea", "Egusi", "Suya", "Beans");

renderProducts();

document.querySelector("#clear-btn").addEventListener("click", () => {
  clearCart();
  renderCart();
});
