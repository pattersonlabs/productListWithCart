import {data} from './data.js';
import {productCard} from './productCards.js'
const grid = document.querySelector('.main-grid')

for ( let i = 0; i < data.length; i++){
    let product = data[i]
    const card = productCard(product)
    grid.appendChild(card)
}

