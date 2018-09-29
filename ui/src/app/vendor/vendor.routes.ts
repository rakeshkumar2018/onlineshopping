import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VendorComponent} from './vendor.component';
import {AddProductComponent} from './add-product/add-product.component'
import {EditProductComponent} from './edit-product/edit-product.component';
import {ViewProductsComponent} from './view-products/view-products.component'
const routes:Routes=[
    {
        path:'',
        component:VendorComponent,
        children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'addProduct',component:AddProductComponent},
            {path:'editProduct',component:EditProductComponent},
            {path:'viewProducts',component:ViewProductsComponent}
        ]
    }
]

export const vendorRouting=RouterModule.forChild(routes);

export const adminRouting=RouterModule.forChild(routes);