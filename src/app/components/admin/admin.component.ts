import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];
  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.service.orders$.subscribe((data: Order[]) => {
      this.orders = data;
    });
    this.service.getOrders();

  }
  deleteOrder(id): void {
    this.service.deleteOrder(id).subscribe((data) => {
      console.log(data);
      this.service.getOrders();
    });
  }
}
