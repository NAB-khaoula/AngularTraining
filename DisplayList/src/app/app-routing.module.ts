import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListComponent } from './Heroes-dashboard/Components/heroes-list/heroes-list.component';
import { HeroesDashboardComponant } from './Heroes-dashboard/container/heroes-dashboard/heroes-dashboard.component';
import { HeroesDetailsComponent } from './Heroes-dashboard/Components/heroes-details/heroes-details.component';

const routes: Routes = [
  {path: 'Heroes-dashboard/Components/heroes-list', component: HeroesListComponent},
  { path: 'Heroes-dashboard/container/heroes-dashboard', component: HeroesDashboardComponant },
  {path: 'Heroes-dashboard/Components/heroes-details/:id', component: HeroesDetailsComponent},
  { path: '', redirectTo: 'Heroes-dashboard/Components/heroes-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }