const menuIcon = document.querySelector(".menu-icon");
const cartIcon = document.querySelector(".cart-icon");
const searchBox = document.querySelector(".search-box");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

const overlay = document.querySelector(".overlay");
const menuPanel = document.querySelector(".menu-panel");
const cartPanel = document.querySelector(".cart-panel");

let menuOpen = false;

// === MENU ===
menuIcon.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuPanel.classList.add("active");
    overlay.classList.add("active");
    cartPanel.classList.remove("active");
  } else {
    menuPanel.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// === CART ===
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

// === SEARCH ===
searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchInput.focus();
  if (searchBox.classList.contains("active")) {
    overlay.classList.remove("active");
  }
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value.trim() === "") {
    searchBox.classList.remove("active");
  }
});

// === CLOSE ON OVERLAY CLICK ===
overlay.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  cartPanel.classList.remove("active");
  overlay.classList.remove("active");
  menuOpen = false;
});