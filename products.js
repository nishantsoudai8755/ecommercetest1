const productsList = document.getElementById('productsList');

// Fetch products from Local Storage
const products = JSON.parse(localStorage.getItem('products')) || [];

// Function to display products on the page
function displayProducts() {
  productsList.innerHTML = '';
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${product.name}</strong> (SKU: ${product.sku}) - $${product.price}
      <img src="${product.image}" alt="${product.name}" style="width:50px;height:50px;">
    `;
    productsList.appendChild(li);
  });
}

// Initial render
displayProducts();
