import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });

  constructor(private http: HttpClient) {}
  public getProductShop() {
    return this.http.get('http://localhost:3000/product');
  }
  public getViewProduct(id: Number) {
    return this.http.get('http://localhost:3000/product/' + id, {
      headers: this.httpheaders,
    });
  }
}
