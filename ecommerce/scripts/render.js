import { products } from "./products.js";
import { addToCart, removeFromCart, getCart } from "./cart.js";

const productGrid = document.querySelector("#products-grid");

const cartCountEl = document.querySelector("#cart-count");
const cartItemsEl = document.querySelector("#cart-items");
const cartEmptyEl = document.querySelector("#cart-empty");
const cartItemsCount = document.querySelector("#cart-items-count");
const cartTotalEl = document.querySelector("#cart-total");
const checkoutBtn = document.querySelector("#checkout-btn");

export const renderProducts = () => {
  productGrid.innerHTML = "";

  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <div class="product-img">${product.emoji}</div>
      <div class="product-info">
          <p class="product-category">${product.category}</p>
          <p class="product-name">${product.name}</p>
          <div class="product-footer">
              <span class="product-price">&#x20A6;${product.price.toLocaleString()}</span>
              <button class="add-btn">Add to Cart</button>
          </div>
      </div>
    `;

    card.querySelector(".add-btn").addEventListener("click", function () {
      addToCart(product.id);
    });

    productGrid.appendChild(card);
  }
};

export const renderCart = () => {
  cartItemsEl.innerHTML = "";

  const cart = getCart();
  if (cart.length === 0) {
    cartItemsEl.appendChild(cartEmptyEl);
    cartCountEl.textContent = "0";
    cartItemsCount.textContent = "0 items";
    cartTotalEl.textContent = "0";
    return;
  }

  let total = 0;
  let itemCount = 0;

  for (const item of cart) {
    total += item.price * item.quantity;
    itemCount++;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
          <p class="cart-item-name">${item.quantity} ${item.name}</p>
          <p class="cart-item-price">₦32,000</p>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">
          <i class="hgi-stroke hgi-delete-02"></i>
      </button>`;

    cartItemsEl.appendChild(cartItem);
  }

  cartItemsCount.textContent = `${itemCount.toLocaleString()} items`;
  cartTotalEl.textContent = total.toLocaleString();
  cartCountEl.textContent = cart.length;
  checkoutBtn.disabled = false;

  const removeBtns = document.querySelectorAll(".cart-item-remove");
  for (const btn of removeBtns) {
    btn.addEventListener("click", function () {
      removeFromCart(this.dataset.id);
    });
  }
};
