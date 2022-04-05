import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleadminModule } from './admin/moduleadmin.module';
import {NbStatusService} from "@nebular/theme";
import { HomeclientComponent } from './homeclient/homeclient.component';
import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
import { InjectionToken} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import {NbMenuModule} from "@nebular/theme";

@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesComponent,
    HomeclientComponent,
    FooterComponent,
    CheckoutComponent,
    ContactComponent,
    CartComponent,
    ShopComponent,
    ShopDetailComponent,
    AppComponent,
  ],
  imports: [
    ModuleadminModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NbMenuModule.forRoot()
  ],
  providers: [NbStatusService],
  bootstrap: [AppComponent],
})
export class AppModule {}
