import { renderCart } from "./renderCart.js";

let cart = [];

export function addToCart(product) {
  const existingItem = cart.find((item) => item.productName === product.name);

  if (existingItem) {
    existingItem.productQuantity++;
  } else {
    let itemInCart = {
      productName: product.name,
      productPrice: product.price,
      productQuantity: 1,
      productId: product.id,
    };
    cart.push(itemInCart);
  }

  renderCart(cart);
}
