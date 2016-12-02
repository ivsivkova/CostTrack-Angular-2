import { Component } from '@angular/core';
import { Product } from './product-class.component';

@Component({
    selector:'product-total-price',
    inputs: ['product'],
    template:`
    <div class="total-price">Total price: {{product.prodQuantity * product.prodPpI}} лв.</div>
    `
})

export class TotalPrice {
    product: Product;
}