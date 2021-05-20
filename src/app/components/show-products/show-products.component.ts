import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  cart: Product[] =[];
  products: Product[] = [];
  status: boolean = false;

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.products$.subscribe((data:Product[]) => {
      this.products = data;
    })
    this.productService.getProducts();
  }
}
