import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from '../../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Subject <Order[]>();
	orders$ = this.orders.asObservable();
  constructor(private http: HttpClient) { }

  addOrder(order:Order): Observable<Order>{
      return this.http.post<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

  getOrders() : void{
    this.http.get<Order[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=117').subscribe((data: Order[]) => {
      console.log(this.orders.next(data));
    })
  }
  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/'+id);
  }
}
