import { Injectable } from "@angular/core";

import { Hero } from "./models/hero.interface";
import { HEROES } from "./mock.heroes";

@Injectable({
    providedIn: 'root'
})

export class HeroSevice{
    constructor() { }
    getHeroes(): Hero[] {return HEROES};
}
