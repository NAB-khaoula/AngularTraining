import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesDashboardModule } from './Heroes-dashboard/heroes-dashboard.module';
import { MessagesComponent } from './messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, HeroesDashboardModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
