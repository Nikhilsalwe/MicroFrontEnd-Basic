import {mount} from 'products/ProductsIndex';
import {mount as cartMOunt} from 'cart/CartShow';

console.log('Container!');

mount(document.querySelector('#my-product'))
cartMOunt(document.querySelector('#my-cart'))
