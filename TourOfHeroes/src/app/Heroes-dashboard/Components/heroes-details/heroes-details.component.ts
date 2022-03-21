import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../../hero.service";

import { Hero } from "../../models/hero.interface";
import { subscribeOn, Subscription } from "rxjs";

@Component({
    selector: 'heroes-details',
    templateUrl: './heroes-details.component.html',
    styleUrls: ['./heroes-details.component.scss']
})

export class HeroesDetailsComponent implements OnInit{

    hero?: Hero;
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getHero();
    }

    getHero(){
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id).subscribe(hero => this.hero = hero)
    }

    goBack(){
        this.location.back();
    }
    save(): void {
        if (this.hero) {
          this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
        }
      }
}