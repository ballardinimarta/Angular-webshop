import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new Subject <Product[]>();
	products$ = this.products.asObservable();
  constructor(private http: HttpClient) { }

  getProducts(): void {
    if(!localStorage.getItem('products')) {
      this.http.get<Product[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .subscribe((data:Product[]) => {
        console.log(this.products.next(data));
        localStorage.setItem('products', JSON.stringify(data));
      });
    } else {
      this.products.next(JSON.parse(localStorage.getItem('products')));
    }
    
  }

  getProduct(id: number): Product {
    let products: Product[] = JSON.parse(localStorage.getItem('products'));
    return products.filter((p) => p.id == id)[0];
  }

  searchProducts(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=${term}`)
  }
  
}