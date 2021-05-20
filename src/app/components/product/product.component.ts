import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  cart: Product[] =[];

  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
  
  }
  addToMyCart() {
    this.cartService.addToCart(this.product);
  }

}
