// --- Data Produk Dummy ---
const products = [
    {
        id: 1,
        name: "MacBook Pro 14\" M3",
        price: 32000000,
        category: "laptop",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 124,
        description: "Laptop bertenaga dengan chip M3 generasi terbaru. Layar Liquid Retina XDR yang menakjubkan dan baterai tahan lama.",
        features: ["Chip Apple M3", "14-inch Liquid Retina XDR", "16GB Unified Memory", "512GB SSD"]
    },
    {
        id: 2,
        name: "Asus ROG Zephyrus G14",
        price: 28500000,
        category: "laptop",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 89,
        description: "Laptop gaming ultra-portable dengan performa luar biasa. Dilengkapi layar AniMe Matrix yang unik.",
        features: ["AMD Ryzen 9", "NVIDIA RTX 4060", "16GB DDR5 RAM", "1TB NVMe SSD"]
    },
    {
        id: 3,
        name: "Lenovo ThinkPad X1 Carbon",
        price: 25000000,
        category: "laptop",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 210,
        description: "Laptop bisnis premium dengan desain tangguh, keyboard nyaman, dan keamanan level enterprise.",
        features: ["Intel Core i7 Gen 13", "14-inch WUXGA", "16GB LPDDR5", "512GB SSD"]
    },
    {
        id: 4,
        name: "iPhone 15 Pro Max",
        price: 23000000,
        category: "smartphone",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 342,
        description: "Smartphone flagship dengan desain titanium aerospace-grade, chip A17 Pro, dan sistem kamera tercanggih.",
        features: ["Desain Titanium", "Chip A17 Pro", "Kamera Utama 48MP", "USB-C"]
    },
    {
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        price: 21500000,
        category: "smartphone",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 256,
        description: "Smartphone AI pertama dengan fitur penerjemahan langsung, kamera luar biasa dengan zoom optik, dan S-Pen built-in.",
        features: ["Galaxy AI", "Kamera 200MP", "Snapdragon 8 Gen 3", "Layar Dynamic AMOLED 2X"]
    },
    {
        id: 6,
        name: "Google Pixel 8 Pro",
        price: 16500000,
        category: "smartphone",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 128,
        description: "Pengalaman Android paling murni dengan fitur fotografi AI tercanggih dan pembaruan sistem yang panjang.",
        features: ["Google Tensor G3", "Layar Super Actua", "Magic Eraser Pro", "Termometer Suhu"]
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        price: 6500000,
        category: "smartwatch",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 412,
        description: "Jam tangan pintar dengan layar lebih terang, gesture double tap, dan fitur pelacakan kesehatan canggih.",
        features: ["Chip S9 SiP", "Layar 2000 nits", "Double Tap Gesture", "EKG & Blood Oxygen"]
    },
    {
        id: 8,
        name: "Garmin Fenix 7 Pro",
        price: 13500000,
        category: "smartwatch",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 156,
        description: "Smartwatch GPS multisport premium dengan pengisian daya surya dan fitur pemantauan performa pro.",
        features: ["Solar Charging", "LED Flashlight", "Multisport GPS", "Daya Tahan Baterai 22 Hari"]
    },
    {
        id: 9,
        name: "Samsung Galaxy Watch 6 Classic",
        price: 5200000,
        category: "smartwatch",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 198,
        description: "Desain klasik dengan bezel putar ikonik, layar yang lebih besar, dan pelacakan tidur yang lebih baik.",
        features: ["Rotating Bezel", "Layar Sapphire Crystal", "Pelacakan Tidur Lanjutan", "BioActive Sensor"]
    },
    {
        id: 10,
        name: "Sony WH-1000XM5",
        price: 5500000,
        category: "aksesoris",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 530,
        description: "Headphone wireless dengan noise cancelling terbaik di kelasnya dan kualitas suara premium.",
        features: ["Industry Leading ANC", "Daya Tahan Baterai 30 Jam", "Desain Ultra Nyaman", "High-Resolution Audio"]
    },
    {
        id: 11,
        name: "Logitech MX Master 3S",
        price: 1650000,
        category: "aksesoris",
        image: "https://images.unsplash.com/photo-1527814050087-1510465cecaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 345,
        description: "Mouse nirkabel presisi dengan klik hening (quiet clicks) dan sensor 8K DPI untuk bekerja di segala permukaan.",
        features: ["Quiet Clicks", "8000 DPI Sensor", "MagSpeed Scrolling", "Desain Ergonomis"]
    },
    {
        id: 12,
        name: "Keychron Q1 Pro",
        price: 3200000,
        category: "aksesoris",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 112,
        description: "Keyboard mekanikal custom nirkabel dengan body full aluminium dan dukungan QMK/VIA.",
        features: ["Full Aluminum Body", "Wireless & Wired", "Hot-Swappable", "Dukungan QMK/VIA"]
    }
];

// --- State Management ---
let cart = JSON.parse(localStorage.getItem('techstore_cart')) || [];
let currentCategory = 'all';
let searchQuery = '';

// --- Format Rupiah ---
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
};

// --- DOM Elements ---
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const noResultsMessage = document.getElementById('noResultsMessage');

const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutTotal = document.getElementById('checkoutTotal');

const productModal = document.getElementById('productModal');
const productModalContent = document.getElementById('productModalContent');
const toastContainer = document.getElementById('toastContainer');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// --- Render Products ---
function renderProducts() {
    productGrid.innerHTML = '';
    
    // Filter logic
    const filteredProducts = products.filter(product => {
        const matchCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (filteredProducts.length === 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <span class="product-category">${product.category}</span>
                <div class="product-img-wrapper" onclick="openProductDetail(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
                    <div class="product-rating">
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star-half"></i>
                        <span>${product.rating} (${product.reviews})</span>
                    </div>
                    <div class="product-bottom">
                        <span class="product-price">${formatRupiah(product.price)}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="Tambah ke Keranjang">
                            <i class="ph ph-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }
}

// --- Cart Logic ---
function addToCart(productId) {
    // Check if event was clicked from a button that might bubble, in our case the inline onclick handles it
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`Berhasil menambahkan <b>${product.name}</b> ke keranjang.`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('techstore_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    // Animate badge
    cartBadge.style.transform = 'scale(1.2)';
    setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);

    // Update items list
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="ph ph-shopping-cart"></i>
                <p>Keranjang Anda masih kosong</p>
            </div>
        `;
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
        checkoutBtn.style.cursor = 'not-allowed';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.cursor = 'pointer';
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const cartEl = document.createElement('div');
            cartEl.className = 'cart-item';
            cartEl.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${formatRupiah(item.price)}</div>
                    <div class="cart-item-controls">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="ph ph-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartEl);
        });
    }

    // Update Total Price
    cartTotalPrice.textContent = formatRupiah(totalPrice);
    
    // Update Checkout form totals
    checkoutSubtotal.textContent = formatRupiah(totalPrice);
    checkoutTotal.textContent = formatRupiah(totalPrice);
}

// --- Product Detail Modal ---
window.openProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let featuresHtml = '';
    product.features.forEach(f => {
        featuresHtml += `<li><i class="ph-fill ph-check-circle"></i> ${f}</li>`;
    });

    productModalContent.innerHTML = `
        <div class="modal-header">
            <h3>Detail Produk</h3>
            <button class="close-modal" onclick="closeProductModal()"><i class="ph ph-x"></i></button>
        </div>
        <div class="modal-body">
            <div class="product-detail-layout">
                <div class="pd-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="pd-info">
                    <span class="product-category" style="position:static; margin-bottom:1rem; display:inline-block;">${product.category}</span>
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star-half"></i>
                        <span>${product.rating} (${product.reviews} ulasan)</span>
                    </div>
                    <div class="pd-price">${formatRupiah(product.price)}</div>
                    <p class="pd-desc">${product.description}</p>
                    
                    <h4>Fitur Utama:</h4>
                    <ul class="pd-features">
                        ${featuresHtml}
                    </ul>
                    
                    <button class="btn btn-primary btn-block" onclick="addToCartAndClose(${product.id})" style="margin-top: 2rem;">
                        <i class="ph ph-shopping-cart"></i> Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

window.closeProductModal = function() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

window.addToCartAndClose = function(productId) {
    addToCart(productId);
    closeProductModal();
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Filter Categories
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.filter;
            renderProducts();
        });
    });

    // Search
    const handleSearch = (val) => {
        searchQuery = val;
        renderProducts();
        // Scroll to products if on mobile and searching
        if(window.innerWidth < 768 && searchQuery !== '') {
            document.getElementById('products').scrollIntoView({behavior: 'smooth'});
        }
    };
    
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    
    searchBtn.addEventListener('click', () => {
        handleSearch(searchInput.value);
        if(searchInput.value !== '') {
            document.getElementById('products').scrollIntoView({behavior: 'smooth'});
        }
    });

    // Cart Sidebar
    cartBtn.addEventListener('click', () => {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeCartBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Checkout Modal
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        cartOverlay.classList.remove('active');
        checkoutModal.classList.add('active');
    });

    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });
    
    // Close mobile menu when link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
        });
    });

    // Checkout Form Submit
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulasi checkout
        const btn = checkoutForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Memproses...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Pembayaran Berhasil! Pesanan Anda sedang diproses.');
            cart = [];
            saveCart();
            updateCartUI();
            
            checkoutModal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset form
            checkoutForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// --- Toast Notification System ---
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="ph-fill ph-check-circle"></i>
        <div class="toast-content">
            <p>${message}</p>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // wait for exit animation
    }, 3000);
}
