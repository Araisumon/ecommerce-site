const products = [
  { id: 1, name: "Jute Bag", price: 300 },
  { id: 2, name: "Herbal Soap", price: 150 },
  { id: 3, name: "Phone Case", price: 200 }
];

const cart = [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach(p => {
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

document.getElementById("cart-icon").onclick = () => {
  document.getElementById("cart-modal").classList.remove("hidden");
  const items = document.getElementById("cart-items");
  items.innerHTML = "";
  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ৳${p.price}`;
    items.appendChild(li);
  });
};

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
