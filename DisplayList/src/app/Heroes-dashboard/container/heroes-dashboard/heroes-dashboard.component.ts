import { Component, OnInit } from "@angular/core";

import { Hero } from "../../models/hero.interface";

import { HeroSevice } from "../../hero.service";

@Component({
    selector: 'heroes-dashboard',
    templateUrl: 'heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})

export class HeroesDashboardComponant implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService: HeroSevice) {}

    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes(): void{
        this.heroes = this.heroService.getHeroes();
    }

}