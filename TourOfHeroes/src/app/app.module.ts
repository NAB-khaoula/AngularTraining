import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesDashboardModule } from './Heroes-dashboard/heroes-dashboard.module';
import { MessagesComponent } from './messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, HeroesDashboardModule, AppRoutingModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
