import { Component, OnInit } from "@angular/core";

import { Hero } from "../../models/hero.interface";

import { HeroService } from "../../hero.service";

@Component({
    selector: 'heroes-dashboard',
    templateUrl: 'heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})

export class HeroesDashboardComponant implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }


    getHeroes(): void{
        // This method allows us to get the hero data in an asynchronous way;
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 3));
    }

}