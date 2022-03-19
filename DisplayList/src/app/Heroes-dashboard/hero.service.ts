import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "./models/hero.interface";
import { HEROES } from "./mock.heroes";
import { MessagesService } from "../messages.service";

@Injectable({
    providedIn: 'root'
})

export class HeroSevice{
    //This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
    constructor(private messageService: MessagesService) { }
    getHeroes(): Observable<Hero[]> {
        const HS = of(HEROES);
        this.messageService.add('this service fetch heroes')
        return HS;
    };
}
