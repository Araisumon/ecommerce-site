const products = [
  { id: 1, name: "Jute Bag", price: 300, category: "fashion" },
  { id: 2, name: "Herbal Soap", price: 150, category: "home" },
  { id: 3, name: "Phone Case", price: 200, category: "tech" },
  { id: 4, name: "Cushion Cover", price: 250, category: "home" },
  { id: 5, name: "Sunglasses", price: 500, category: "fashion" }
];

const cart = [];

function renderProducts(filter = "all") {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>৳${p.price}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("cart-count").textContent = cart.length;
}

function filterProducts(category) {
  renderProducts(category);
}

function scrollToProducts() {
  document.getElementById("product-list").scrollIntoView({ behavior: "smooth" });
}

function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderFiltered(filtered);
}

function renderFiltered(filtered) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>৳${p.price}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
    list.appendChild(div);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").textContent = cart.length;
  openCart();
}

function openCart() {
  document.getElementById("cart-modal").classList.remove("hidden");
  const items = document.getElementById("cart-items");
  items.innerHTML = "";
  cart.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${p.name} - ৳${p.price} <button onclick="removeFromCart(${i})">Remove</button>`;
    items.appendChild(li);
  });
}

document.getElementById("cart-icon").onclick = openCart;

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

function checkout() {
  alert("Checkout complete! Thank you.");
  cart.length = 0;
  document.getElementById("cart-count").textContent = "0";
  closeCart();
}

renderProducts();
