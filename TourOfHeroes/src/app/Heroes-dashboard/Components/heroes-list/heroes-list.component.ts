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
 }