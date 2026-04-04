// We need to create product card using the data passed in index.js

import { addToCart } from "./cart.js";

export function productCard(product) {
  let element = document.createElement("div");
  element.classList.add("productCards");

  element.innerHTML = `
    <img src = '${product.image.thumbnail}'>
    <h3 class = 'product-category'>${product.category}</h3>
    <h2 class = 'product-name'>${product.name}</h2>
    <p class = 'product-price'>${product.price}</p>
    <button type = 'button' class = 'add-to-cart-btn'>Add to Cart</button>
   `;

  const addToCartButton = element.querySelector(".add-to-cart-btn");
  console.log(addToCartButton);
  addToCartButton.addEventListener("click", (e) => {
    addToCart(product);
  });
  return element;
}
