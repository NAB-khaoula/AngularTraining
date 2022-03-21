import { Component, Input, OnInit } from "@angular/core";

import { Hero } from "../../models/hero.interface";
import {HeroService} from "../../hero.service";
import { MessagesService } from "src/app/messages.service";


@Component({
	selector: 'heroes-list',
	templateUrl: 'heroes-list.component.html',
	styleUrls: ['heroes-list.component.scss']
})

export class HeroesListComponent implements OnInit{

	items: Hero[] = [];
	itemDetails?: Hero;
	constructor(private heroService: HeroService){}

	ngOnInit(): void {
		this.getItems();
	};

	getItems(): void{
		this.heroService.getHeroes().subscribe(heroes => this.items = heroes);
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		console.log({name} as Hero)
		this.heroService.addHero({ name } as Hero)
		  .subscribe(hero => {
			  this.items = [...this.items, hero];
		  });
	  }
	
	delete(hero: Hero): void {
		this.items = this.items.filter(h => h !== hero)
		this.heroService.deleteHero(hero.id)
		  .subscribe();
	}
 }