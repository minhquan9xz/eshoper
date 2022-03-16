import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path:'checkout',
    component:CheckoutComponent},
  {
    path: 'shop_detail/:id',
    component: ShopDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
