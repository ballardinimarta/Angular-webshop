import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { Orderrow } from 'src/app/models/OrderRow';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit {
  @Input() price: number;
  @Input() cart: Product[];
  order: Order = new Order();
  paymentMethods: string [] = ['Klarna', 'PayPal', 'Kort', 'Banköverföring']
  buyer = this.fb.group({
    email: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['',Validators.required],
    payment: [this.paymentMethods[0], Validators.required]
  })
  constructor(private fb: FormBuilder, private service: OrderService, private router: Router) { }

  ngOnInit(): void {
  }
  submitForm(): void {
    this.order.orderRows = [];
    this.cart.map((item, i) => {
        let row = new Orderrow(item.id, null, item.amount, this.order.id)
        this.order.orderRows.push(row)
    })
    this.order.createdBy = this.buyer.value.email;
    this.order.totalPrice = this.price;
    this.order.paymentMethod = this.buyer.value.payment;
    this.service.addOrder(this.order).subscribe((data) => {
      this.cart = [];
      this.router.navigate(['thankyou', data.id]);
    });
    
  }
}
