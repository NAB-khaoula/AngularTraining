import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppTopBarComponent } from './top-bar/app-top-bar.component';
import { AppProductListComponent } from './product-list/app-product-list.component';
import { AppProductAlertComponent } from './product-alert/app-product-alert.component';
import { AppProductDetailsComponent } from './product-details/app-product-details.component';
import { AppCartComponent } from './cart/app-cart.component';

import { AppComponent } from './app.component';
import { AppShippingComponent } from './shipping/app-shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppProductListComponent,
    AppProductAlertComponent,
    AppProductDetailsComponent,
    AppCartComponent,
    AppShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
