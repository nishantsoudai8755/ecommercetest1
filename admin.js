const form = document.getElementById('addProductForm');
const productList = document.getElementById('productList');

// Get products from Local Storage
const products = JSON.parse(localStorage.getItem('products')) || [];

// Function to display products in the admin panel
function updateProductList() {
  productList.innerHTML = ''; // Clear current list
  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${product.name}</strong> (SKU: ${product.sku}) - $${product.price}
      <img src="${product.image}" alt="${product.name}" style="width:50px;height:50px;">
      <button onclick="deleteProduct(${index})">Delete</button>
    `;
    productList.appendChild(li);
  });
}

// Form submit event to add a new product
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const sku = document.getElementById('productSKU').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;

  const product = { name, sku, price, image };
  products.push(product);

  // Save updated products to Local Storage
  localStorage.setItem('products', JSON.stringify(products));

  // Update the product list UI
  updateProductList();

  // Clear the form
  form.reset();
});

// Delete product function
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  updateProductList();
}

// Initial UI update
updateProductList();
