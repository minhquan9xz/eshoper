import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { HttpProdService } from 'src/app/service/http-prod.service';
import { HttpServerService } from '../../service/http-server.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  p: number = 1;
  public productShop: any;
  // public inF_product: any;
  articles: any;

  constructor(
    private product: HttpServerService,
    private infProd: HttpProdService
  ) {}

  ngOnInit(): void {
    this.product.getProductShop().subscribe((data) => {
      console.log('data', data);
      this.productShop = data;
    });
  }
  addtocart(item: any) {
    const cartLocal = localStorage.getItem('cartLocal');
    if (cartLocal) {
      let newCart = JSON.parse(cartLocal);
      console.log(newCart);
      newCart.push(item);
      localStorage.setItem('cartLocal', JSON.stringify(newCart));
      this.infProd.product_Cart.next(item);
    } else localStorage.setItem('cartLocal', JSON.stringify([item]));
  }
}
