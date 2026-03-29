import {data} from '../js/data.js'
import { productCard } from '../js/productCards.js';

const grid = document.querySelector('.main-grid');

for (let i = 0; i < data.length; i++){
    let product = data[i];
    let productElement = productCard(product)
    grid.appendChild(productElement);
}

console.log(data);