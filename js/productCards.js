export function productCart(singleProduct) {
    const element = document.createElement('div')
    element.classList.add('item-card')
    element.innerHTML = `
    <img src="${singleProduct.image.thumbnail} ">
    <h3>${singleProduct.category}</h3>
              <h2>${singleProduct.name}</h2>
              <div class="price">${singleProduct.price}</div>
              <button class="add-cart-btn">to Cart</button>
    `
    return element;
}