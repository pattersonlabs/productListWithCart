import { renderCart } from "./renderCart.js";

export let cart = [];

export function addToCart(product, add = true) {
  const existingItem = cart.find((item) => item.productName === product.name);

  if (existingItem) {
    if (add) {
      existingItem.productQuantity++;
    } else {
      existingItem.productQuantity--;
      if (existingItem.productQuantity <= 0) {
        cart.splice(cart.indexOf(existingItem), 1);
      }
    }
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
  return existingItem?.productQuantity ?? 1;
}
