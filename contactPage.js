const menuIcon = document.querySelector(".menu-icon");
const cartIcon = document.querySelector(".cart-icon");
const overlay = document.querySelector(".overlay");
const menuPanel = document.querySelector(".menu-panel");
const cartPanel = document.querySelector(".cart-panel");
const contactForm = document.getElementById("contactForm");

let menuOpen = false;
let cartOpen = false;

// === MENU TOGGLE ===
menuIcon.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menuPanel.classList.add("active");
        overlay.classList.add("active");
        cartPanel.classList.remove("active");
        cartOpen = false;
    } else {
        menuPanel.classList.remove("active");
        overlay.classList.remove("active");
    }
});

// === CART - Desktop hover ===
cartIcon.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
        cartPanel.classList.add("active");
        overlay.classList.add("active");
        menuPanel.classList.remove("active");
        menuOpen = false;
    }
});

cartIcon.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
        setTimeout(() => {
            if (!cartPanel.matches(':hover')) {
                cartPanel.classList.remove("active");
                overlay.classList.remove("active");
            }
        }, 100);
    }
});

cartPanel.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
        cartPanel.classList.remove("active");
        overlay.classList.remove("active");
    }
});

// === CART - Mobile click ===
cartIcon.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        cartOpen = !cartOpen;
        if (cartOpen) {
            cartPanel.classList.add("active");
            overlay.classList.add("active");
            menuPanel.classList.remove("active");
            menuOpen = false;
        } else {
            cartPanel.classList.remove("active");
            overlay.classList.remove("active");
        }
    } else {
        window.location.href = "cart.html";
    }
});

// === CLOSE ON OVERLAY CLICK ===
overlay.addEventListener("click", () => {
    menuPanel.classList.remove("active");
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
    menuOpen = false;
    cartOpen = false;
});

// === FORM SUBMIT ===
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Здесь можно добавить отправку формы
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

// === CLOSE PANELS ON RESIZE ===
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuPanel.classList.remove("active");
        cartPanel.classList.remove("active");
        overlay.classList.remove("active");
        menuOpen = false;
        cartOpen = false;
    }
});