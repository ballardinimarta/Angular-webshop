import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new Subject <Product[]>();
	products$ = this.products.asObservable();
  constructor(private http: HttpClient) { }

  getProducts(): void {
    this.http.get<Product[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data:Product[]) => {console.log(this.products.next(data))})
  }
  
}
