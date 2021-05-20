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
  totalPrice: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.getTotalPrice();
  }
  clearCart() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCartItems();
    this.getTotalPrice();
  }
  removeCartItem(item) {
    this.cartService.removeCartItem(item);
    this.cart = this.cartService.getCartItems();
    this.getTotalPrice();

  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.cart.map((item, i) => {
      this.totalPrice += item.price;
    })
  }

}
