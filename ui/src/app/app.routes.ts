import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './shared/components/login/login.component'

const routes:Routes=[
    {
        path:'',redirectTo:'login', pathMatch:'full'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'admin',loadChildren:'./admin/admin.module#AdminModule'
    },
    {
        path:'vendor',loadChildren:'./vendor/vendor.module#VendorModule'
    },
    {
        path:'customer',loadChildren:'./customer/customer.module#CustomerModule'
    }
]

export const appRoutes=RouterModule.forRoot(routes,{useHash:true});
