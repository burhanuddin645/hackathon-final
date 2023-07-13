// Get the products container and cart elements
const productsContainer = document.getElementById('products-container');
const cart = document.getElementById('cart');

// Fetch products data from dummy JSON API
fetch('https://dummyapi.io/data/api/user?limit=5', {
  headers: {
    'app-id': 'your-app-id' // Replace with your dummy JSON API app ID
  }
})
.then(response => response.json())
.then(data => {
  // Render the products
  renderProducts(data.data);
})
.catch(error => {
  console.error('Error:', error);
});

// Render the products
function renderProducts(products) {
  products.forEach(product => {
    // Create product element
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <img src="${product.picture}" alt="${product.firstName}" width="100">
      <h3>${product.firstName}</h3>
      <p>${product.email}</p>
      <button onclick="addToCart('${product.id}', '${product.firstName}')">Add to Cart</button>
    `;

    // Append product element to the products container
    productsContainer.appendChild(productElement);
  });
}

// Add a product to the cart
function addToCart(productId, productName) {
  // Create cart item element
  const cartItem = document.createElement('li');
  cartItem.textContent = productName;

  // Append cart item to the cart
  cart.appendChild(cartItem);
}
