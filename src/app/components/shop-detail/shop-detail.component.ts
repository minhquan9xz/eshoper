import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product';
import { HttpProdService } from '../../service/http-prod.service';
import { HttpServerService } from '../../service/http-server.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css'],
})
export class ShopDetailComponent implements OnInit {
  id: any;
  public detail_product: any;
  public articles: any;
  constructor(
    private http_prod: HttpProdService,
    private _route: ActivatedRoute,
    private http_server: HttpServerService
  ) {}

  ngOnInit(): void {
    // this.http_prod.viewProduct.subscribe((data: any) => {
    //   this.detail_product = data;
    //   console.log('viewdatail', this.detail_product);
    // });

    console.log(this._route.snapshot.params.id);
    this.articles = this._route.snapshot.params.id;
    this.http_server.getViewProduct(this.articles).subscribe((data) => {
      this.detail_product = data;
      console.log('dataaaaaa', data);
    });
  }
}
