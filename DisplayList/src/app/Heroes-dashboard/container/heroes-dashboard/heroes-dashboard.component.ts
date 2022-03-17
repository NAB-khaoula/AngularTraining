import { Component, OnInit } from "@angular/core";

import { Hero } from "../../models/hero.interface";

@Component({
    selector: 'heroes-dashboard',
    templateUrl: 'heroes-dashboard.component.html',
    styleUrls: ['./heroes-dashboard.component.scss']
})

export class HeroesDashboardComponant implements OnInit{
    heroes: Hero[] = [];

ngOnInit(): void {
    this.heroes = [
        {
            name: 'Captain America',
            creationYear: 1941,
            Weapons: 'Vibranium shield',
            superPower: ['Strength', 'agility', 'stamina', 'healing ability', 'expert tactician']
        },
        {
            name: 'Black Panther',
            creationYear: 1966,
            Weapons: 'Energy dagger',
            superPower: ['Enhanced senses', 'superhuman condition', 'speed', 'martial artist']
        },
        {
            name: 'Killmonger',
            creationYear: 1973,
            Weapons: 'energy blasting wristband',
            superPower: ['Strength', 'expert tactician and manipulator', 'peak-level hunter']
        }
      ];
}

}