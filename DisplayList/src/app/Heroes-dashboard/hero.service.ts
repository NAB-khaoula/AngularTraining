import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "./models/hero.interface";
import { HEROES } from "./mock.heroes";
import { MessagesService } from "../messages.service";

@Injectable({
    providedIn: 'root'
})

export class HeroService{
    //This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
    constructor(private messageService: MessagesService) { }
    getHeroes(): Observable<Hero[]> {
        const HS = of(HEROES);
        this.messageService.add('this service fetch heroes')
        return HS;
    };
    getHero(id: number): Observable<Hero> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const hero = HEROES.find(h => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
      }

}
