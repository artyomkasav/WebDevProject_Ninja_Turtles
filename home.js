const body = document.body;
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
const menuIcon = document.querySelector(".menu-icon");
const cartIcon = document.querySelector(".cart-icon");

// Создаём оверлей для блюра
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// === Меню ===
const menuPanel = document.createElement("div");
menuPanel.classList.add("menu-panel");
menuPanel.innerHTML = `
  <ul class="menu-list">
    <li>Figures</li>
    <li>Manga</li>
    <li>Posters</li>
    <li>Accessories</li>
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

// === Поиск ===
searchIcon.addEventListener("mouseenter", () => {
  searchBox.classList.add("active");
  searchInput.focus();
  // при поиске блюра не должно быть
  overlay.classList.remove("active");
});

searchBox.addEventListener("mouseleave", () => {
  if (searchInput.value.trim() === "") {
    searchBox.classList.remove("active");
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

let cartOpen = false;

cartIcon.addEventListener("mouseenter", () => {
  cartPanel.classList.add("active");
  overlay.classList.add("active");
  // закрываем меню если оно было открыто
  menuPanel.classList.remove("active");
  menuOpen = false;
});

cartIcon.addEventListener("mouseleave", () => {
  cartPanel.classList.remove("active");
  overlay.classList.remove("active");
});

// переход при клике
cartIcon.addEventListener("click", () => {
  window.location.href = "cart.html";
});

// === Закрытие при клике на фон ===
overlay.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  cartPanel.classList.remove("active");
  overlay.classList.remove("active");
  menuOpen = false;
  cartOpen = false;
});