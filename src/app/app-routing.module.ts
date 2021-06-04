import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { StartComponent } from './components/start/start.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  {path: 'search', component:SearchComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'cart', component:CartComponent},
  {path: 'products', component:ShowProductsComponent},
  {path: 'product/:id', component:ProductDetailComponent},
  {path: 'thankyou/:id', component:ThankYouComponent},
  {path: '', component: StartComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
