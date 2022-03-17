import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesDashboardModule } from './Heroes-dashboard/heroes-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, HeroesDashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
