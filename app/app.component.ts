import {Component} from '@angular/core';
import { Product } from './products/product-class.component';
import { ProductList } from './products/product-list.component';

@Component({
    selector: 'costTrack-app',
    entryComponents: [ProductList],
    template: `
        <h1>CostTrack App</h1>
        <product-list [productList]="products"></product-list>
    `,
})
export class AppComponent {
    products: Product[];
    
    constructor(){
        this.products = [
            new Product("http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", "Milk", "Pilos", 2, 1.30, "Food", "23.03.2016"),
            new Product("http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", "Wine", "Cycle", 5, 8.60, "Food", "23.03.2016"),
            new Product("http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", "Bread", "Dobrudja", 2, 1.09, "Food", "23.03.2016"),
            new Product("http://icons.iconarchive.com/icons/icons8/android/512/Food-Vegeterian-Food-icon.png", "Water", "Devin", 3, 1.30, "Food", "23.03.2016")
        ];
    }
}