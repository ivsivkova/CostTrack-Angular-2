import { Component } from '@angular/core';
import { Product } from './product-class.component';
import { ProductIcon } from './product-icon.component';
import { TotalPrice } from './product-total-price.component';

@Component ({
    selector: 'product-item',
    entryComponents: [ProductIcon, TotalPrice],
    inputs:['product'],
    template:`
        <product-icon [product]="product"></product-icon>
        <div>Product: {{product.prodName}}</div>
        <div>Brand: {{product.prodBrand}}</div>
        <div>Quantity: {{product.prodQuantity}}</div>
        <div>Price per item: {{product.prodPpI}}</div>
        <div>Product type: {{product.prodType}}</div>
        <div>Date of purchase: {{product.dateOfPurchase}}</div>
        <product-total-price [product]="product"></product-total-price>
    `
})

export class ProductItem {
    product: Product;
}