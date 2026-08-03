const products = [
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

let cart = [];

const productGrid = document.querySelector("#products-grid");

const renderProducts = () => {
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
              <button class="add-btn" onClick="addToCart(${product.id})">Add to Cart</button>
          </div>
      </div>
    `;

    productGrid.appendChild(card);
  }
};

const addToCart = (productId) => {
  const actualProduct = products.find((product) => product.id === productId);

  const existing = cart.find((item) => item.id === actualProduct.id);

  if (existing) {
    existing.quantity++;
  } else {
    const item = { ...actualProduct, quantity: 1 };
    cart.push(item);
  }

  renderCart();
};

const cartCountEl = document.querySelector("#cart-count");
const cartItemsEl = document.querySelector("#cart-items");
const cartEmptyEl = document.querySelector("#cart-empty");
const cartItemsCount = document.querySelector("#cart-items-count");
const cartTotalEl = document.querySelector("#cart-total");
const checkoutBtn = document.querySelector("#checkout-btn");

const renderCart = () => {
  cartItemsEl.innerHTML = "";

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

const removeFromCart = (productId) => {
  const index = cart.findIndex((item) => item.id === parseInt(productId));
  if (index !== -1) {
    // Means Item is found
    cart.splice(index, 1);
  }
  renderCart();
};

document.querySelector("#clear-btn").addEventListener("click", () => {
  cart = [];
  renderCart();
})

renderProducts();
