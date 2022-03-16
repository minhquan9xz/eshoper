import { Component, OnInit } from '@angular/core';
import { HttpProdService } from '../../service/http-prod.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  dataLocal:any

  public arrayProductCart: any;
  constructor(private infProd: HttpProdService) {}

  ngOnInit(): void {
    this.infProd.product_Cart.subscribe((data) => {
      console.log('dataaaaa', data);
      this.dataLocal = data.length
    });
    
    const productLocal = localStorage.getItem('cartLocal')
    if(productLocal){
      const a = JSON.parse(productLocal)
      this.dataLocal = a?.length
    
    }
    //   console.log('dataLocal',this.dataLocal.length);
  }
}
