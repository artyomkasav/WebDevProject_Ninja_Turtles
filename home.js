const body = document.body;
const menuIcon = document.querySelector(".menu-icon");
const cartIcon = document.querySelector(".cart-icon");
const searchBox = document.querySelector(".search-box");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

// === Overlay ===
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// === Меню ===
const menuPanel = document.createElement("div");
menuPanel.classList.add("menu-panel");
menuPanel.innerHTML = `
  <ul class="menu-list">
    <li><a href="index.html">Home</a></li>
    <li>Figures</li>
    <li>Manga</li>
    <li>Posters</li>
    <li>Accessories</li>
    
    <li><a href="contactPage.html">Contact us</a></li>
  </ul>
`;
document.body.appendChild(menuPanel);

let menuOpen = false;

menuIcon.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuPanel.classList.add("active");
    overlay.classList.add("active");
  } else {
    menuPanel.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// === Корзина ===
const cartPanel = document.createElement("div");
cartPanel.classList.add("cart-panel");
cartPanel.innerHTML = `
  <h3>Your Cart</h3>
  <div class="cart-items">
    <div class="cart-item">Product 1</div>
    <div class="cart-item">Product 2</div>
  </div>
`;
document.body.appendChild(cartPanel);

cartIcon.addEventListener("mouseenter", () => {
  cartPanel.classList.add("active");
  overlay.classList.add("active");
  menuPanel.classList.remove("active");
  menuOpen = false;
});

cartIcon.addEventListener("mouseleave", () => {
  cartPanel.classList.remove("active");
  overlay.classList.remove("active");
});

cartIcon.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// === Поиск ===
searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchInput.focus();
  // убираем блюр при поиске
  if (searchBox.classList.contains("active")) {
    overlay.classList.remove("active");
  }
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value.trim() === "") {
    searchBox.classList.remove("active");
  }
});

// === Закрытие по клику на оверлей ===
overlay.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  cartPanel.classList.remove("active");
  overlay.classList.remove("active");
  menuOpen = false;
});