import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import {vendorRouting} from './vendor.routes'
@NgModule({
  imports: [
    CommonModule,
    vendorRouting
  ],
  declarations: [VendorComponent, HomeComponent, AddProductComponent, EditProductComponent, ViewProductsComponent]
})
export class VendorModule { }
