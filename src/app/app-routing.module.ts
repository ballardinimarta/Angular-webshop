import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: 'cart', component:CartComponent},
  {path: 'products', component:ShowProductsComponent},
  {path: 'product/:id', component:ProductDetailComponent},
  {path: '', component: StartComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
