import { Component } from '@angular/core';
import { Route } from './models/Route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: Route[] = [
    new Route('/', 'fas fa-home'),
    new Route('/products', 'fas fa-film'),
    new Route('/cart', 'fas fa-shopping-cart'),
    new Route('/search', 'fas fa-search'),
    new Route('/admin', 'fas fa-user-cog')
  ]
}
