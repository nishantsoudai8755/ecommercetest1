const form = document.getElementById('addProductForm');
const productList = document.getElementById('productList');

// Get existing products from Local Storage or create an empty array
const products = JSON.parse(localStorage.getItem('products')) || [];

// Function to update the product list UI
function updateProductList() {
  productList.innerHTML = ''; // Clear the list
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

// Add a product to the list
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const sku = document.getElementById('productSKU').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;

  // Save product to the array
  const product = { name, sku, price, image };
  products.push(product);

  // Save updated products array to Local Storage
  localStorage.setItem('products', JSON.stringify(products));

  // Update the product list UI
  updateProductList();

  // Clear the form
  form.reset();
});

// Delete a product
function deleteProduct(index) {
  products.splice(index, 1); // Remove product from array
  localStorage.setItem('products', JSON.stringify(products)); // Update Local Storage
  updateProductList(); // Update UI
}

// Initial UI update
updateProductList();
