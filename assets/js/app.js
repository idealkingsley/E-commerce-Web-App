// Sample product data
let products = [
    { id: 1, name: 'Smartphone', price: 500, image: 'assets/images/smartphone.jpg' },
    { id: 2, name: 'Laptop', price: 900, image: 'assets/images/laptop.jpg' },
    { id: 3, name: 'Headphones', price: 130, image: 'assets/images/headphones.jpg' },
    { id: 4, name: 'Smartwatch', price: 200, image: 'assets/images/smartwatch.jpg' },
    { id: 5, name: 'Tablet', price: 350, image: 'assets/images/tablet.jpg' },
    { id: 6, name: 'Camera', price: 600, image: 'assets/images/camera.jpg' },
    { id: 7, name: 'Gaming Console', price: 400, image: 'assets/images/gaming-console.jpg' },
    { id: 8, name: 'Wireless Earbuds', price: 150, image: 'assets/images/wireless-earbuds.jpg' },
];

let cart = [];

// DOM elements
let productList = document.getElementById('product-list');
let cartIcon = document.getElementById('cart-icon');
let cartItems = document.getElementById('cart-items');
let cartTotal = document.getElementById('cart-total');
let cartCount = document.getElementById('cart-count');
let checkoutBtn = document.getElementById('checkout-btn');

// Display products
function displayProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        let productCard = document.createElement('div');
        productCard.className = 'col-12 col-sm-6 col-lg-3 mb-4';
        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Add to cart
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Update cart
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Event listeners
productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        let productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

cartIcon.addEventListener('click', () => {
    let cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
});

checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart.length = 0;
    updateCart();
});

// Initialize the app
displayProducts();
