import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  constructor() { }

  addToCart(product) {
        if (this.cart.includes(product)) {
          product.amount += 1;  
        } else {
          product.amount = 1;
          this.cart.push(product);
          console.log(this.cart)
        }
  }
  getCartItems() {
    return this.cart;
  }
  removeCartItem (product) {
    if (this.cart.includes(product)) {
      let index = this.cart.indexOf(product);
      this.cart.splice(index, 1);
    } else {
      console.log('not in cart')
    }
  }
  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
