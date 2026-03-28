import {data} from './data.js'
import { productCart } from '../productCards.js';

const grid = document.querySelector('.main-grid');

for (let i = 0; i < data.length; i++){
    let product = data[i];
    let productElement = productCart(product)
    grid.appendChild(productElement);
}

console.log(data);