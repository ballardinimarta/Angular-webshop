import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../../models/Category';
import { ProductCategory } from '../../models/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorys = new Subject <ProductCategory[]>();
	categorys$ = this.categorys.asObservable();
  constructor(private http: HttpClient) { }

  getCategorys(){
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/categories')
    .subscribe((data:ProductCategory[]) => {
      console.log(this.categorys.next(data));
    });
  }

  
}
