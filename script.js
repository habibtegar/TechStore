/**
 * Tech Store - Clean & Modern Vanilla JavaScript
 * Pure Client-side Logic (Tanpa Library Eksternal)
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. STATE & STORAGE
    // ==========================================================================
    let cart = [];
    try {
        const storedCart = localStorage.getItem('techstore_cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
            if (!Array.isArray(cart)) cart = [];
        }
    } catch (e) {
        console.warn('Gagal membaca data keranjang dari localStorage:', e);
        cart = [];
    }

    let currentCategory = 'all';
    let searchQuery = '';

    // Nomor WhatsApp Toko (Ubah sesuai nomor yang diinginkan)
    const WHATSAPP_PHONE = '6281234567890';

    // Helper Format Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number);
    };

    // ==========================================================================
    // 2. DOM ELEMENTS
    // ==========================================================================
    const productCards = document.querySelectorAll('.product-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const noResultsMessage = document.getElementById('noResultsMessage');

    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartItemsCountText = document.getElementById('cartItemsCountText');
    const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

    const toastContainer = document.getElementById('toastContainer');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // ==========================================================================
    // 3. FILTER KATEGORI & LIVE SEARCH
    // ==========================================================================
    function filterProducts() {
        const activeCategory = currentCategory.toLowerCase();
        const query = searchQuery.trim().toLowerCase();
        let visibleCount = 0;

        productCards.forEach(card => {
            const category = (card.getAttribute('data-category') || '').toLowerCase();
            const name = (card.getAttribute('data-name') || '').toLowerCase();

            const matchCategory = (activeCategory === 'all' || category === activeCategory);
            const matchSearch = (query === '' || name.includes(query));

            if (matchCategory && matchSearch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Tampilkan pesan kosong jika tidak ada produk yang cocok
        if (noResultsMessage) {
            noResultsMessage.classList.toggle('hidden', visibleCount > 0);
        }
    }

    // Event Listener Filter Kategori (Pill Buttons)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });

            const target = e.currentTarget;
            target.classList.add('active');
            target.setAttribute('aria-selected', 'true');

            currentCategory = target.getAttribute('data-filter') || 'all';
            filterProducts();
        });
    });

    // Event Listener Live Search (Desktop & Mobile)
    const handleSearchInput = (value) => {
        searchQuery = value;
        filterProducts();
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            handleSearchInput(e.target.value);
            if (window.innerWidth < 768 && e.target.value.trim() !== '') {
                const prod = document.getElementById('products');
                if (prod) prod.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ==========================================================================
    // 4. KERANJANG BELANJA & LOCALSTORAGE
    // ==========================================================================
    function saveCart() {
        try {
            localStorage.setItem('techstore_cart', JSON.stringify(cart));
        } catch (e) {
            console.error('Gagal menyimpan ke localStorage:', e);
        }
    }

    function updateCartUI() {
        // 1. Update Badge Count di Navbar
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartBadge) {
            cartBadge.textContent = totalItems;
            // Efek bounce ringan
            cartBadge.style.transform = 'scale(1.35)';
            setTimeout(() => {
                cartBadge.style.transform = 'scale(1)';
            }, 200);
        }

        if (cartItemsCountText) {
            cartItemsCountText.textContent = `(${totalItems} item)`;
        }

        // 2. Render Daftar Item ke Dalam Modal/Drawer Keranjang
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">
                        <i class="ph ph-shopping-cart-simple"></i>
                    </div>
                    <p>Keranjang belanja Anda masih kosong</p>
                </div>
            `;
            if (whatsappCheckoutBtn) {
                whatsappCheckoutBtn.disabled = true;
                whatsappCheckoutBtn.style.opacity = '0.5';
                whatsappCheckoutBtn.style.cursor = 'not-allowed';
            }
        } else {
            if (whatsappCheckoutBtn) {
                whatsappCheckoutBtn.disabled = false;
                whatsappCheckoutBtn.style.opacity = '1';
                whatsappCheckoutBtn.style.cursor = 'pointer';
            }

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                totalPrice += itemTotal;

                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <div class="cart-item-price">${formatRupiah(item.price)}</div>
                        <div class="cart-item-controls">
                            <div class="qty-control">
                                <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Kurangi kuantiti">-</button>
                                <span class="qty-value">${item.quantity}</span>
                                <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Tambah kuantiti">+</button>
                            </div>
                            <button class="remove-btn" data-action="remove" data-id="${item.id}" aria-label="Hapus item">
                                <i class="ph ph-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemEl);
            });
        }

        // 3. Update Total Harga
        if (cartTotalPrice) {
            cartTotalPrice.textContent = formatRupiah(totalPrice);
        }
    }

    // Tambah Produk ke Keranjang
    function addToCart(productData, buttonEl) {
        const productId = productData.id;
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productData.id,
                name: productData.name,
                price: Number(productData.price) || 0,
                image: productData.image,
                quantity: 1
            });
        }

        saveCart();
        updateCartUI();

        // Feedback Visual pada tombol (+): Berubah jadi ikon centang sejenak
        if (buttonEl) {
            buttonEl.classList.add('added');
            buttonEl.innerHTML = '<i class="ph-bold ph-check"></i>';
            setTimeout(() => {
                buttonEl.classList.remove('added');
                buttonEl.innerHTML = '<i class="ph ph-plus"></i>';
            }, 800);
        }

        showToast(`Berhasil menambahkan <strong>${productData.name}</strong> ke keranjang.`);
    }

    // Event Listener Tambah ke Keranjang dari Kartu Produk
    productCards.forEach(card => {
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productData = {
                    id: card.getAttribute('data-id'),
                    name: card.getAttribute('data-name'),
                    price: card.getAttribute('data-price'),
                    image: card.getAttribute('data-image')
                };
                addToCart(productData, addBtn);
            });
        }
    });

    // Event Delegation Kontrol Jumlah & Hapus Item di Keranjang
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');
            const item = cart.find(i => i.id === id);

            if (!item) return;

            if (action === 'increase') {
                item.quantity += 1;
                saveCart();
                updateCartUI();
            } else if (action === 'decrease') {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== id);
                    showToast(`<strong>${item.name}</strong> dihapus dari keranjang.`, 'info');
                }
                saveCart();
                updateCartUI();
            } else if (action === 'remove') {
                cart = cart.filter(i => i.id !== id);
                saveCart();
                updateCartUI();
                showToast(`<strong>${item.name}</strong> dihapus dari keranjang.`, 'info');
            }
        });
    }

    // Drawer Toggles
    const openCart = () => {
        if (cartOverlay) {
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeCart = () => {
        if (cartOverlay) {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            if (e.target === cartOverlay) closeCart();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCart();
    });

    // ==========================================================================
    // 5. CHECKOUT VIA WHATSAPP
    // ==========================================================================
    function checkoutWhatsApp() {
        if (cart.length === 0) {
            showToast('Keranjang belanja Anda masih kosong!', 'warning');
            return;
        }

        let message = `*HALO TECH STORE, SAYA INGIN MEMESAN:*\n`;
        message += `-------------------------------------------\n\n`;

        let grandTotal = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;
            message += `${index + 1}. *${item.name}*\n`;
            message += `   - Jumlah: ${item.quantity} unit\n`;
            message += `   - Harga Satuan: ${formatRupiah(item.price)}\n`;
            message += `   - Subtotal: ${formatRupiah(itemTotal)}\n\n`;
        });

        message += `-------------------------------------------\n`;
        message += `*Total Pembayaran:* ${formatRupiah(grandTotal)}\n`;
        message += `*Ongkos Kirim:* Bebas Ongkir (Se-Indonesia)\n\n`;
        message += `Mohon konfirmasi ketersediaan stok & nomor rekening pembayaran. Terima kasih!`;

        const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    }

    if (whatsappCheckoutBtn) {
        whatsappCheckoutBtn.addEventListener('click', checkoutWhatsApp);
    }

    // ==========================================================================
    // 6. SCROLL SPY NAVIGATION
    // ==========================================================================
    function setupScrollSpy() {
        const sections = [
            document.getElementById('home'),
            document.getElementById('products'),
            document.getElementById('about')
        ].filter(Boolean);

        const navLinks = document.querySelectorAll('.nav-menu .nav-link, .mobile-menu .mobile-nav-link');

        const onScroll = () => {
            const scrollPos = window.scrollY;
            const offset = 140; // Kompensasi tinggi navbar sticky

            let currentSection = 'home';
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const top = section.offsetTop - offset;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentSection = section.getAttribute('id');
                    break;
                }
            }

            // Jika posisi scroll sudah mencapai bagian bawah halaman
            if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
                currentSection = 'about';
            }

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${currentSection}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ==========================================================================
    // 7. TOAST NOTIFICATION SYSTEM
    // ==========================================================================
    function showToast(message, type = 'success') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';

        let icon = 'ph-fill ph-check-circle';
        if (type === 'warning') icon = 'ph-fill ph-warning-circle';
        if (type === 'info') icon = 'ph-fill ph-info';

        toast.innerHTML = `
            <i class="${icon}"></i>
            <div class="toast-content">
                <p>${message}</p>
            </div>
        `;

        toastContainer.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    // ==========================================================================
    // 8. MOBILE MENU TOGGLE
    // ==========================================================================
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.className = 'ph ph-x';
            } else {
                icon.className = 'ph ph-list';
            }
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'ph ph-list';
            });
        });
    }

    // ==========================================================================
    // 9. INITIALIZE
    // ==========================================================================
    updateCartUI();
    filterProducts();
    setupScrollSpy();
});
