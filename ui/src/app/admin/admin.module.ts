import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import {adminRouting} from './admin.routes'
import {MyOwnMaterialModule} from '../shared/modules/my-own-material/my-own-material.module'
import {ChangePwdComponent} from '../shared/components/change-pwd/change-pwd.component'
import {MenuClickDirective} from '../shared/directives/menu-click.directive'
@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    MyOwnMaterialModule
  ],
  declarations: [MenuClickDirective,ChangePwdComponent,AdminComponent, HomeComponent, VendorComponent, VendorListComponent, EditVendorComponent]
})
export class AdminModule { }
