import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDashboardComponant } from './Heroes-dashboard/container/heroes-dashboard/heroes-dashboard.component';

const routes: Routes = [
  { path: 'Heroes-dashboard/container/heroes-dashboard', component: HeroesDashboardComponant }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }