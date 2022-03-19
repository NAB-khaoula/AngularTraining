import { Component, Input, OnInit } from "@angular/core";

import { Hero } from "../../models/hero.interface";
import { MessagesService } from "src/app/messages.service";


@Component({
    selector: 'heroes-list',
    templateUrl: 'heroes-list.component.html',
    styleUrls: ['heroes-list.component.scss']
})

export class HeroesListComponent implements OnInit{
    
    @Input()
    items: Hero[] = [];
    itemDetails?: Hero;
    constructor(private messageService: MessagesService){}

    ngOnInit(): void {   
    };

    onSelect(hero: Hero): void {
        this.messageService.add(`HeroesComponent: Selected hero name=${hero.name}`);
      }

    displayDetails(hero: Hero): void{
        this.itemDetails = hero;
    }
 }