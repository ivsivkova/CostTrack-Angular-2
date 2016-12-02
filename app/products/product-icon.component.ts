import { Component } from '@angular/core';
import { Product } from './product-class.component';

    @Component({
        selector: 'product-icon',
        inputs: ['product'],
        template:`
        <img class="" [src]="product.icon"/>
        `
    })

export class ProductIcon {
    product: Product;
}