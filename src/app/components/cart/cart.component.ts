import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
  }
  clearCart() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCartItems();

  }
  removeCartItem(item) {
    this.cartService.removeCartItem(item);
    this.cart = this.cartService.getCartItems();

  }

}
