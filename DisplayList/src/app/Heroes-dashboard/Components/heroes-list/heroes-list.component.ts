import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../../models/hero.interface";

@Component({
    selector: 'heroes-list',
    templateUrl: 'heroes-list.component.html',
    styleUrls: ['heroes-list.component.scss']
})

export class HeroesListComponent implements OnInit{
    @Input()
    items: Hero[] = [];
    selectedHero?: Hero;
    ngOnInit(): void {
        
    };
    displayDetails(hero: Hero): void{
        this.selectedHero = hero;
    }
 }