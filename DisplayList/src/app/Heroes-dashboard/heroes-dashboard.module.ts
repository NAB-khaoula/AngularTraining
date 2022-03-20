import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


import { HeroesDetailsComponent } from "./Components/heroes-details/heroes-details.component";
import { HeroesListComponent } from "./Components/heroes-list/heroes-list.component";
import { HeroesDashboardComponant } from "./container/heroes-dashboard/heroes-dashboard.component";

@NgModule({
    declarations: [HeroesDashboardComponant, HeroesDetailsComponent, HeroesListComponent],
    imports: [BrowserModule, FormsModule, RouterModule],
    exports: [HeroesDashboardComponant]
})

export class HeroesDashboardModule{ }
