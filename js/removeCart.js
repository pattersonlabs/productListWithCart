// Create remove on added items
// On click update array
// Envoke render cart

import { renderCart } from "./renderCart.js";
import { cart } from "./cart.js";

const cartGrid = document.querySelector("#shopping-cart");

cartGrid.addEventListener("click", (e) => {
  const currentCart = cart;

  if (e.target.matches(".remove-cart-btn")) {
    let productId = e.target.getAttribute("data-remove-id");
    for (let i = 0; i < currentCart.length; i++) {
      if (currentCart[i].productId == productId) {
        if (currentCart[i].productQuantity > 1) {
          currentCart[i].productQuantity--;
          renderCart(cart);
        } else {
          currentCart.splice(i, 1);
          renderCart(cart);
        }
      }
    }
  }
});
