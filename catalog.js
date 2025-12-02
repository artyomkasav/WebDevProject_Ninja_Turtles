
// === MENU ===


const PRODUCTS = [
    // FIGURES
    { id: 1, name: "Naruto Uzumaki Figure", category: "figures", price: 49.99, image: "../Icons/placeholder.png", description: "High-quality PVC figure of Naruto in his iconic pose. Approximately 25cm tall with incredible detail.", badge: "new" },
    { id: 2, name: "Sasuke Uchiha Figure", category: "figures", price: 54.99, image: "../Icons/placeholder.png", description: "Limited edition Sasuke figure with Sharingan activated. Premium quality collectible." },
    { id: 3, name: "Luffy Gear 5 Figure", category: "figures", price: 79.99, oldPrice: 99.99, image: "../Icons/placeholder.png", description: "Epic Gear 5 transformation figure with dynamic base. A must-have for One Piece fans!", badge: "sale" },
    { id: 4, name: "Gojo Satoru Figure", category: "figures", price: 64.99, image: "../Icons/placeholder.png", description: "Jujutsu Kaisen's strongest sorcerer in his signature pose. Hollow Purple effect included.", badge: "new" },
    { id: 5, name: "Eren Yeager Titan Form", category: "figures", price: 89.99, image: "../Icons/placeholder.png", description: "Attack Titan form figure with incredible muscle detail. 30cm of pure titan power." },
    { id: 6, name: "Zero Two Figure", category: "figures", price: 59.99, image: "../Icons/placeholder.png", description: "Darling in the Franxx Zero Two in pilot suit. Beautiful pink details." },
    
    // MANGA
    { id: 7, name: "One Piece Box Set Vol 1-23", category: "manga", price: 149.99, oldPrice: 189.99, image: "../Icons/placeholder.png", description: "Start your One Piece journey with the first 23 volumes in a beautiful collector's box.", badge: "sale" },
    { id: 8, name: "Demon Slayer Complete Box", category: "manga", price: 179.99, image: "../Icons/placeholder.png", description: "All 23 volumes of Demon Slayer in a special edition box set.", badge: "new" },
    { id: 9, name: "Chainsaw Man Vol. 1", category: "manga", price: 9.99, image: "../Icons/placeholder.png", description: "The beginning of Denji's chaotic journey. Tatsuki Fujimoto's masterpiece." },
    { id: 10, name: "Jujutsu Kaisen Vol. 1-5", category: "manga", price: 45.99, image: "../Icons/placeholder.png", description: "First five volumes of the hit series. Join Yuji Itadori's cursed adventure." },
    { id: 11, name: "My Hero Academia Vol. 1", category: "manga", price: 8.99, image: "../Icons/placeholder.png", description: "Where Deku's hero journey begins. Plus Ultra!" },
    { id: 12, name: "Spy x Family Vol. 1-3", category: "manga", price: 29.99, image: "../Icons/placeholder.png", description: "Follow the Forger family's hilarious spy adventures." },
    
    // POSTERS
    { id: 13, name: "Demon Slayer Poster Set", category: "posters", price: 15.99, image: "../Icons/placeholder.png", description: "Set of 5 high-quality posters featuring all Hashira. Perfect for any anime room." },
    { id: 14, name: "Attack on Titan Wall Art", category: "posters", price: 24.99, image: "../Icons/placeholder.png", description: "Large format poster of the Survey Corps. 60x90cm premium print." },
    { id: 15, name: "Studio Ghibli Collection", category: "posters", price: 34.99, image: "../Icons/placeholder.png", description: "8 iconic Ghibli movie posters. Spirited Away, Totoro, Howl's Castle and more!", badge: "new" },
    { id: 16, name: "Naruto Akatsuki Poster", category: "posters", price: 12.99, image: "../Icons/placeholder.png", description: "All Akatsuki members in one epic poster. Red cloud aesthetic." },
    { id: 17, name: "Dragon Ball Z Legends", category: "posters", price: 19.99, image: "../Icons/placeholder.png", description: "Super Saiyan transformation poster set. Feel the power!" },
    { id: 18, name: "Cyberpunk Anime Set", category: "posters", price: 22.99, image: "../Icons/placeholder.png", description: "Cyberpunk Edgerunners and Akira themed posters. Neon vibes." },
    
    // ACCESSORIES
    { id: 19, name: "Sharingan Contact Lenses", category: "accessories", price: 29.99, image: "../Icons/placeholder.png", description: "Cosplay contact lenses with Sharingan design. Safe and comfortable.", badge: "new" },
    { id: 20, name: "Naruto Headband Set", category: "accessories", price: 19.99, image: "../Icons/placeholder.png", description: "Set of 5 village headbands. Konoha, Sand, Mist, Cloud, and Stone." },
    { id: 21, name: "Anime Keycaps Set", category: "accessories", price: 39.99, image: "../Icons/placeholder.png", description: "Custom anime-themed keycaps for mechanical keyboards. Cherry MX compatible." },
    { id: 22, name: "Death Note Replica", category: "accessories", price: 24.99, image: "../Icons/placeholder.png", description: "Full replica of the Death Note with rules page. Feather pen included!" },
    { id: 23, name: "Demon Slayer Earrings", category: "accessories", price: 14.99, image: "../Icons/placeholder.png", description: "Tanjiro's iconic Hanafuda earrings. High-quality stainless steel." },
    { id: 24, name: "Anime Sticker Pack 100pcs", category: "accessories", price: 9.99, image: "../Icons/placeholder.png", description: "100 waterproof vinyl stickers from popular anime series. Perfect for laptops!" }
];

const CATEGORY_INFO = {
    all: { title: "All Products", desc: "Browse our complete anime collection" },
    figures: { title: "Anime Figures", desc: "High-quality collectible figures from your favorite series" },
    manga: { title: "Manga", desc: "Original Japanese manga and box sets" },
    posters: { title: "Posters & Wall Art", desc: "Decorate your space with stunning anime artwork" },
    accessories: { title: "Accessories", desc: "Cosplay items, keychains, and more" }
};

// State 
let currentCategory = 'all';
let currentSort = 'default';
let minPrice = null;
let maxPrice = null;
let searchQuery = '';
let modalQuantity = 1;
let selectedProduct = null;

// DOM elemnt 
const productsGrid = document.getElementById('productsGrid');
const emptyState = document.getElementById('emptyState');
const loading = document.getElementById('loading');
const productsCount = document.getElementById('productsCount');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDesc = document.getElementById('categoryDesc');
const pills = document.querySelectorAll('.pill');
const sortSelect = document.getElementById('sortSelect');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const applyPriceBtn = document.getElementById('applyPrice');
const searchInput = document.getElementById('searchInput');
const resetFiltersBtn = document.getElementById('resetFilters');
const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");
const menuPanel = document.querySelector(".menu-panel");

// Modal
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const qtyValue = document.getElementById('qtyValue');
const modalAddToCart = document.getElementById('modalAddToCart');

let menuOpen = false;

//Init 
function init() {
    // Get category from URL
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get('category');
    if (urlCategory && CATEGORY_INFO[urlCategory]) {
        currentCategory = urlCategory;
    }
    
    updateCategoryUI();
    renderProducts();
    setupEventListeners();
}

// Render
function renderProducts() {
    let filtered = filterProducts();
    filtered = sortProducts(filtered);
    
    productsCount.textContent = filtered.length;
    
    if (filtered.length === 0) {
        productsGrid.innerHTML = '';
        emptyState.classList.add('show');
        return;
    }
    
    emptyState.classList.remove('show');
    
    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image"
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23f4b7f4%22 width=%22100%22 height=%22100%22 rx=%2210%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-size=%2230%22>🎭</text></svg>'">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    €${product.price.toFixed(2)}
                    ${product.oldPrice ? `<span class="old-price">€${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                    <button class="add-btn" data-id="${product.id}">Add +</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts() {
    return PRODUCTS.filter(p => {
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        if (minPrice !== null && p.price < minPrice) return false;
        if (maxPrice !== null && p.price > maxPrice) return false;
        if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });
}

function sortProducts(products) {
    const sorted = [...products];
    switch (currentSort) {
        case 'price-low': return sorted.sort((a, b) => a.price - b.price);
        case 'price-high': return sorted.sort((a, b) => b.price - a.price);
        case 'name': return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest': return sorted.sort((a, b) => b.id - a.id);
        default: return sorted;
    }
}

function updateCategoryUI() {
    categoryTitle.textContent = CATEGORY_INFO[currentCategory].title;
    categoryDesc.textContent = CATEGORY_INFO[currentCategory].desc;
    
    pills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === currentCategory);
    });
}

// Modal 
function openModal(productId) {
    selectedProduct = PRODUCTS.find(p => p.id === productId);
    if (!selectedProduct) return;
    
    modalQuantity = 1;
    qtyValue.textContent = modalQuantity;
    
    document.getElementById('modalImage').src = selectedProduct.image;
    document.getElementById('modalCategory').textContent = selectedProduct.category;
    document.getElementById('modalTitle').textContent = selectedProduct.name;
    document.getElementById('modalDescription').textContent = selectedProduct.description;
    document.getElementById('modalPrice').textContent = `€${selectedProduct.price.toFixed(2)}`;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
}

// Event listener
function setupEventListeners() {
    // Category pills
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            currentCategory = pill.dataset.category;
            updateCategoryUI();
            renderProducts();
            
            // Update URL
            const url = new URL(window.location);
            if (currentCategory === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', currentCategory);
            }
            window.history.pushState({}, '', url);
        });
    });
// MENU OPENER
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


    // Sort
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        renderProducts();
    });
    
    // Price filter
    applyPriceBtn.addEventListener('click', () => {
        minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : null;
        maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : null;
        renderProducts();
    });
    
    // Search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = searchInput.value;
            renderProducts();
        }, 300);
    });
    
    // Reset filters
    resetFiltersBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentSort = 'default';
        minPrice = null;
        maxPrice = null;
        searchQuery = '';
        
        sortSelect.value = 'default';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        searchInput.value = '';
        
        updateCategoryUI();
        renderProducts();
    });
    
    // Product cards
    productsGrid.addEventListener('click', (e) => {
        const quickViewBtn = e.target.closest('.quick-view-btn');
        const addBtn = e.target.closest('.add-btn');
        const card = e.target.closest('.product-card');
        
        if (quickViewBtn) {
            openModal(parseInt(quickViewBtn.dataset.id));
        } else if (addBtn) {
            const product = PRODUCTS.find(p => p.id === parseInt(addBtn.dataset.id));
            if (product) {
                CartUtils.addItem(product);
            }
        } else if (card && !e.target.closest('button')) {
            openModal(parseInt(card.dataset.id));
        }
    });
    
    // Modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    qtyMinus.addEventListener('click', () => {
        if (modalQuantity > 1) {
            modalQuantity--;
            qtyValue.textContent = modalQuantity;
        }
    });
    
    qtyPlus.addEventListener('click', () => {
        modalQuantity++;
        qtyValue.textContent = modalQuantity;
    });
    
    modalAddToCart.addEventListener('click', () => {
        if (selectedProduct) {
            for (let i = 0; i < modalQuantity; i++) {
                CartUtils.addItem(selectedProduct);
            }
            closeModal();
        }
    });
    
    // Menu
    
    
    overlay.addEventListener("click", () => {
        menuPanel.classList.remove("active");
        overlay.classList.remove("active");
        menuOpen = false;
    });
    
    // ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Start
init();