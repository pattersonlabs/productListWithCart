

export function productCard(singleProduct) {
    const element = document.createElement('div')
    element.classList.add('item-card')
    element.innerHTML = `
    <img src="${singleProduct.image.thumbnail} ">
    <h3>${singleProduct.category}</h3>
              <h2>${singleProduct.name}</h2>
              <div class="price">${singleProduct.price}</div>
              <button class="add-cart-btn">to Cart</button>
              
    `
    const addCartBtn = element.querySelector('.add-cart-btn');
    addCartBtn.addEventListener('click', e => {
        if (e.target.matches('.add-cart-btn')){
        console.log('I have been clicked')
        }
    })
    return element;
}