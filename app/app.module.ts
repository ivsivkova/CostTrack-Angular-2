import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductList } from './products/product-list.component';
import { ProductItem } from './products/product-item.component';
import { ProductIcon } from './products/product-icon.component';
import { TotalPrice } from './products/product-total-price.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductList, ProductItem, ProductIcon, TotalPrice ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
