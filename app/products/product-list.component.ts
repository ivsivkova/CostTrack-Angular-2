import { Component } from '@angular/core';
import { Product } from './product-class.component';
import { ProductItem } from './product-item.component';

@Component({
    selector: 'product-list',
    entryComponents: [ProductItem],
    inputs:['productList'],
    template: `
        <div>
            <product-item *ngFor="let currProd of productList" [product]="currProd"></product-item>
        </div>
    `
})

export class ProductList {
    productList:Product[];
}