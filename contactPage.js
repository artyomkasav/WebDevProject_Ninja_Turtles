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

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


const area = document.getElementById("inputArea");
const option = document.getElementById("option");
const subuttn = document.getElementById("contactButton");
const nInp = document.getElementById("fullName")

option.addEventListener("change", function () {
    area.innerHTML = "";

    if (this.value === "phone") {
        area.innerHTML = `
        <label for="phoneInput" class="enter">Enter phone number:</label>
        <input id="phoneInput" name="phone" type="text" class="form-control" placeholder="Your phone number">`;
    } else if (this.value === "email") {
        area.innerHTML = `
        <label for="emailInput" class="enter">Enter email address:</label>
        <input id="emailInput" name="email" type="text" class="form-control" placeholder="Your email address">`;
    }
});


subuttn.addEventListener("click", function() {
    const input = area.querySelector("input"); 
    if (!input) return;

    const value = input.value;

    if (option.value === "phone") {
        if (!/^\d+$/.test(value)) {
            alert("Phone number is incorrect, try again");
            return;
        }
    } else if (option.value === "email") {
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(value)) {
            alert("Email format is incorrect, try again");
            return;
        }
    } else {
        alert("Please select Phone or Email");
        return;
    }

    alert("Your message has been sent!");
    input.value = "";

   
});

subuttn.addEventListener("click", function() {
    const nameInp = nInp.value

    const words = nameInp.trim().split(/\s+/);
    if (words.length < 2) {
        alert("Please, enter FULL name");
}
})
