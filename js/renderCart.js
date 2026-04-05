export function renderCart(cart) {
  const cartArea = document.querySelector("#shopping-cart");
  cartArea.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    let productTotalValue = cart[i].productQuantity * cart[i].productPrice;
    let element = document.createElement("div");
    element.classList.add("cart-items");
    element.setAttribute("id", "cartDisplay");
    element.setAttribute("data-product-id", cart[i].productId);
    element.innerHTML = `
                <h2 class = 'product-name'>${cart[i].productName}</h2>
                <p class = 'product-price'>@$${cart[i].productPrice.toFixed(2)}</p>
                <p class = 'total-price'>Total Price: $${productTotalValue.toFixed(2)} </p>
                <p class = 'product-quantity'>${cart[i].productQuantity}x</p>
                <button 
                type ='button'
                class = 'remove-cart-btn'
                data-remove-id = '${cart[i].productId}'
                >Delete Item </button>
            `;
    cartArea.appendChild(element);
  }
}
