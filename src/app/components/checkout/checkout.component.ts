import { Component, OnInit } from '@angular/core';
import { HttpProdService } from 'src/app/service/http-prod.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  dataLocal:any

  constructor(private infProd: HttpProdService) { }

  ngOnInit(): void {
    const productLocal = localStorage.getItem('cartLocal')
    if(productLocal){
      const a = JSON.parse(productLocal)
      console.log('aaaa',a );
      
      this.dataLocal = a
    
    }
    this.infProd.product_Cart.subscribe((data) => {
      console.log('datacheckout', data);
      this.dataLocal = data
    });
  }


}
