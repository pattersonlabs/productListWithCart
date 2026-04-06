// We need to create product card using the data passed in index.js

import { addToCart } from "./cart.js";

export function productCard(product) {
  let element = document.createElement("div");
  element.classList.add("productCards");

  let image = document.createElement("img");
  image.setAttribute("src", product.image.thumbnail);

  let productCategory = document.createElement("h3");
  productCategory.classList.add("product-category");
  productCategory.innerText = product.category;

  let productName = document.createElement("h2");
  productName.classList.add("product-name");
  productName.innerText = product.name;

  let productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.innerText = `$${product.price.toFixed(2)}`;

  let addProductButton = document.createElement("button");
  addProductButton.classList.add("add-to-cart-btn");
  addProductButton.innerText = "add to cart";

  const div = document.createElement("div");
  const addItemsBtn = document.createElement("button");
  addItemsBtn.classList.add("add-items-btn");
  addItemsBtn.innerText = "+";

  const quantityNumber = document.createElement("span");
  quantityNumber.classList.add("quantity-number");
  quantityNumber.innerText = 1;

  const subtractItemsBtn = document.createElement("button");
  subtractItemsBtn.classList.add("subtract-items-btn");
  subtractItemsBtn.innerText = "-";

  div.append(addItemsBtn, quantityNumber, subtractItemsBtn);

  let currentQuantity = 0;

  addItemsBtn.addEventListener("click", (e) => {
    currentQuantity = addToCart(product);
    quantityNumber.innerText = currentQuantity;
  });

  subtractItemsBtn.addEventListener("click", (e) => {
    currentQuantity = addToCart(product, false);
    quantityNumber.innerText = currentQuantity;

    console.log(currentQuantity);
    if (currentQuantity == 0) {
      element.replaceChild(addProductButton, div);
    }
  });
  element.append(
    image,
    productCategory,
    productName,
    productPrice,
    addProductButton,
  );

  addProductButton.addEventListener("click", (e) => {
    currentQuantity = addToCart(product);
    element.replaceChild(div, addProductButton);
    quantityNumber.innerText = currentQuantity;
  });
  return element;
}
