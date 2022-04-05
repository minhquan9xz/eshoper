import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {ShopComponent} from "./components/shop/shop.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ShopDetailComponent} from "./components/shop-detail/shop-detail.component";
import {HomeclientComponent} from "./homeclient/homeclient.component";


const routes: Routes = [
  {
    path: '', component: HomeclientComponent, children: [
      {path: 'shop', component: ShopComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'shop_detail/:id', component: ShopDetailComponent},
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/moduleadmin.module').then(m => m.ModuleadminModule)}
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
