const form = document.getElementById('addProductForm');
const productList = document.getElementById('productList');


const products = []; // Temporary storage for products

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const sku = document.getElementById('productSKU').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;

  const product = { name, sku, price, image };
  products.push(product);

  // Save to Local Storage
  localStorage.setItem('products', JSON.stringify(products));

  updateProductList();
  form.reset();
});


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

function deleteProduct(index) {
  products.splice(index, 1);
  updateProductList();
}
