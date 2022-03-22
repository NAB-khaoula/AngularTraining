import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppProductListComponent } from './product-list/app-product-list.component';
import { AppTopBarComponent } from './top-bar/app-top-bar.component';
import { AppProductDetailsComponent } from './product-details/app-product-details.component';
import { AppCartComponent } from './cart/app-cart.component';
import { AppShippingComponent } from './shipping/app-shipping.component';

const routes: Routes = [
  {path:'product-list', component: AppProductListComponent},
  {path:'top-bar', component: AppTopBarComponent},
  {path:'product-details/:id', component: AppProductDetailsComponent},
  {path: 'cart', component: AppCartComponent},
  {path: 'shipping', component: AppShippingComponent},
  {path:'', redirectTo:'product-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
