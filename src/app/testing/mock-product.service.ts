import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {
  private products = new Subject <Product[]>();
	products$ = this.products.asObservable();
  constructor() { }
  testData: Product[] = [
    { added: '2020',
      description: 'film1',
      id: 1,
      imageUrl: 'film1bild',
      name: 'film1',
      price:100,
      productCategory: [{  categoryId: 7,
        category: 'hej'}],
      year:2000,
      amount: 0
    },
    { added: '2021',
      description: 'film2',
      id: 2,
      imageUrl: 'film2',
      name: 'film2',
      price:100,
      productCategory: [{  categoryId: 7,
        category: 'hej'}],
      year:2000,
      amount: 0
    }
  ]

  getProducts(): void {
    this.products.next(this.testData);
  }
}
