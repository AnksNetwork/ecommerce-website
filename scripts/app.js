// // Sample product data
// const products = [
//     { id: 1, name: "Product 1", price: 10, image: "assets/images/product1.jpg" },
//     { id: 2, name: "Product 2", price: 15, image: "assets/images/product2.jpg" },
//     { id: 3, name: "Product 3", price: 20, image: "assets/images/product3.jpg" },
//   ];
  
//   // Initialize an empty cart
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   // Render products on the page
//   const renderProducts = () => {
//     const productGrid = document.querySelector(".product-grid");
  
//     if (!productGrid) {
//       console.error("Error: .product-grid element not found.");
//       return; // Stop execution if the element is not found
//     }
  
//     productGrid.innerHTML = ""; // Clear existing content
  
//     products.forEach((product) => {
//       const productCard = `
//         <div class="product-card">
//           <img src="${product.image}" alt="${product.name}">
//           <h3>${product.name}</h3>
//           <p>$${product.price.toFixed(2)}</p>
//           <button onclick="addToCart(${product.id})">Add to Cart</button>
//         </div>
//       `;
//       productGrid.innerHTML += productCard;
//     });
//   };
  
//   renderProducts();
  
//   // Add product to the cart
// const addToCart = (productId) => {
//     const product = products.find((p) => p.id === productId);
  
//     // Check if the product is already in the cart
//     const existingProduct = cart.find((item) => item.id === productId);
  
//     if (existingProduct) {
//       existingProduct.quantity += 1; // Increase quantity
//     } else {
//       cart.push({ ...product, quantity: 1 }); // Add new product
//     }
  
//     // Save cart to localStorage
//     localStorage.setItem("cart", JSON.stringify(cart));
  
//     alert(`${product.name} added to the cart!`);
//   };
//   // Render cart items
// const renderCart = () => {
//     const cartItems = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");
//     cartItems.innerHTML = ""; // Clear existing content
  
//     let total = 0;
  
//     cart.forEach((item, index) => {
//       const itemTotal = item.price * item.quantity;
//       total += itemTotal;
  
//       const cartRow = `
//         <tr>
//           <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
//           <td>${item.name}</td>
//           <td>$${item.price.toFixed(2)}</td>
//           <td>
//             <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
//           </td>
//           <td>$${itemTotal.toFixed(2)}</td>
//           <td><button onclick="removeFromCart(${index})">Remove</button></td>
//         </tr>
//       `;
//       cartItems.innerHTML += cartRow;
//     });
  
//     cartTotal.innerText = total.toFixed(2);
//   };
  
//   renderCart();
//   // Update item quantity
// const updateQuantity = (index, quantity) => {
//     if (quantity < 1) return;
  
//     cart[index].quantity = parseInt(quantity);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   };
//   // Remove item from cart
// const removeFromCart = (index) => {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   };
//   // Proceed to checkout
// document.getElementById("checkout-button").addEventListener("click", () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }
  
//     alert("Proceeding to checkout...");
//     // Clear the cart
//     cart = [];
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   });
//   // Empty the cart
// document.getElementById("empty-cart-button").addEventListener("click", () => {
//     if (cart.length === 0) {
//       alert("The cart is already empty!");
//       return;
//     }
  
//     if (confirm("Are you sure you want to empty the cart?")) {
//       cart = [];
//       localStorage.setItem("cart", JSON.stringify(cart));
//       renderCart();
//       alert("Cart has been emptied!");
//     }
//   });
//   // Filter products based on search input
// document.getElementById("search-bar").addEventListener("input", (e) => {
//     const query = e.target.value.toLowerCase();
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(query)
//     );
  
//     // Re-render the products with the filtered list
//     const productGrid = document.querySelector(".product-grid");
//     productGrid.innerHTML = ""; // Clear existing content
  
//     filteredProducts.forEach((product) => {
//       const productCard = `
//         <div class="product-card">
//           <img src="${product.image}" alt="${product.name}">
//           <h3>${product.name}</h3>
//           <p>$${product.price.toFixed(2)}</p>
//           <button onclick="addToCart(${product.id})">Add to Cart</button>
//         </div>
//       `;
//       productGrid.innerHTML += productCard;
//     });
//   });
  // Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10.0, image: "assets/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 15.0, image: "assets/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 20.0, image: "assets/images/product3.jpg" },
  ];
  
  // Cart array stored in localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  /* ==========================================
     Product Page Logic
  ========================================== */
  
  // Function to render products on the product page
  const renderProducts = () => {
    const productGrid = document.querySelector(".product-grid");
  
    if (!productGrid) return; // Exit if not on the product page
  
    productGrid.innerHTML = "";
  
    products.forEach((product) => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  };
  
  // Function to add a product to the cart
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
  
    if (!product) {
      alert("Product not found!");
      return;
    }
  
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === productId);
  
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity
    } else {
      cart.push({ ...product, quantity: 1 }); // Add new product with quantity
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
  };
  
  // Render products when on the product page
  renderProducts();
  
  /* ==========================================
     Cart Page Logic
  ========================================== */
  
  // Function to render cart items on the cart page
  const renderCart = () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    if (!cartItems || !cartTotal) return; // Exit if not on the cart page
  
    // If the cart is empty, display a message
    if (cart.length === 0) {
      cartItems.innerHTML = `<tr><td colspan="6">Your cart is empty!</td></tr>`;
      cartTotal.textContent = "0.00";
      return;
    }
  
    // Clear existing content
    cartItems.innerHTML = "";
  
    let total = 0;
  
    // Render each cart item
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      cartItems.innerHTML += `
        <tr>
          <td><img src="${item.image}" alt="${item.name}" width="50"></td>
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>
            <input 
              type="number" 
              value="${item.quantity}" 
              min="1" 
              onchange="updateQuantity(${index}, this.value)"
            >
          </td>
          <td>$${itemTotal.toFixed(2)}</td>
          <td>
            <button onclick="removeFromCart(${index})">Remove</button>
          </td>
        </tr>
      `;
    });
  
    // Update subtotal
    cartTotal.textContent = total.toFixed(2);
  };
  
  // Function to update the quantity of a cart item
  const updateQuantity = (index, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
  
    if (quantity > 0) {
      cart[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    } else {
      alert("Quantity must be at least 1");
    }
  };
  
  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    if (confirm("Are you sure you want to remove this item?")) {
      cart.splice(index, 1); // Remove the item
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  };
  
  // Function to empty the cart
  document.getElementById("empty-cart-button")?.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("The cart is already empty!");
      return;
    }
  
    if (confirm("Are you sure you want to empty the cart?")) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });
  
  // Function for checkout
  document.getElementById("checkout-button")?.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    alert("Proceeding to checkout...");
    // Redirect to a checkout page or integrate a payment gateway
    // window.location.href = "checkout.html";
  });
  
  // Initial render of the cart (only if on cart page)
  renderCart();
  