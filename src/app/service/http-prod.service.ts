import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class HttpProdService {
  // viewProduct = new Subject<any>();
  product_Cart = new Subject<any>();
}
