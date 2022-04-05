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
  numberProduct=1;

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
      const data = JSON.parse(cartLocal);
        const index = data.findIndex((i: any) =>
          i.id === item.id
        );
        console.log('index',index);
        
        data[index].numberProduct = data[index].numberProduct + 1;
        localStorage.setItem('dataLocal', data);
      //  else {
      //   const product_Cart = [...data, findProduct];
      //   console.log('findProduct', findProduct);
      //   console.log('product_Cart', product_Cart);
      // }
      let newCart = JSON.parse(cartLocal);
      console.log('newCart', newCart);
      newCart.push(item);
      localStorage.setItem('cartLocal', JSON.stringify(newCart));
      this.infProd.product_Cart.next(newCart);
    } else localStorage.setItem('cartLocal', JSON.stringify([item]));
  }
}
