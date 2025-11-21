// ==========================================
// CART UTILITIES - Подключай на ВСЕХ страницах
// ==========================================

const CartUtils = {
    STORAGE_KEY: 'anihub_cart',
    
    // Получить корзину
    getCart() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    },
    
    // Сохранить корзину
    saveCart(cart) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
        this.updateCartBadge();
    },
    
    // Добавить товар в корзину
    addItem(product) {
        // product = { id, name, category, price, image }
        const cart = this.getCart();
        const existing = cart.find(item => item.id === product.id);
        
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart(cart);
        this.showAddedNotification(product.name);
        return cart;
    },
    
    // Удалить товар
    removeItem(id) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== id);
        this.saveCart(cart);
        return cart;
    },
    
    // Изменить количество
    updateQuantity(id, quantity) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === id);
        
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                return this.removeItem(id);
            }
        }
        
        this.saveCart(cart);
        return cart;
    },
    
    // Очистить корзину
    clearCart() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.updateCartBadge();
    },
    
    // Получить общее количество товаров
    getTotalItems() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    // Получить общую сумму
    getTotalPrice() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    // Обновить badge на иконке корзины
    updateCartBadge() {
        const badge = document.querySelector('.cart-count');
        if (badge) {
            const count = this.getTotalItems();
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    },
    
    // Показать уведомление о добавлении
    showAddedNotification(productName) {
        // Создаём notification если его нет
        let notification = document.getElementById('cart-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'cart-notification';
            notification.style.cssText = `
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: linear-gradient(135deg, #f4b7f4, #c896e8);
                color: #1a0051;
                padding: 15px 30px;
                border-radius: 10px;
                font-size: 16px;
                font-weight: bold;
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 9999;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            `;
            document.body.appendChild(notification);
        }
        
        notification.textContent = `✓ ${productName} added to cart!`;
        notification.style.transform = 'translateX(-50%) translateY(0)';
        notification.style.opacity = '1';
        
        setTimeout(() => {
            notification.style.transform = 'translateX(-50%) translateY(100px)';
            notification.style.opacity = '0';
        }, 2500);
    }
};

// Обновляем badge при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    CartUtils.updateCartBadge();
});

// ==========================================
// КАК ИСПОЛЬЗОВАТЬ:
// ==========================================
// 
// 1. Подключи этот файл на ВСЕХ страницах:
//    <script src="../js/cartUtils.js"></script>
//
// 2. На странице товара добавь кнопку "Add to Cart":
//    <button class="add-to-cart" 
//            data-id="1" 
//            data-name="Naruto Figure" 
//            data-category="Figures" 
//            data-price="49.99" 
//            data-image="../Icons/naruto.jpg">
//        Add to Cart
//    </button>
//
// 3. Добавь обработчик клика:
//    document.querySelectorAll('.add-to-cart').forEach(btn => {
//        btn.addEventListener('click', () => {
//            CartUtils.addItem({
//                id: parseInt(btn.dataset.id),
//                name: btn.dataset.name,
//                category: btn.dataset.category,
//                price: parseFloat(btn.dataset.price),
//                image: btn.dataset.image
//            });
//        });
//    });
//
// ==========================================