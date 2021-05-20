import { Component } from '@angular/core';
import { Route } from './models/Route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: Route[] = [
    new Route('/', 'Hem'),
    new Route('/products', 'Produkter'),
    new Route('/cart', 'Varukorg'),
  ]
}
