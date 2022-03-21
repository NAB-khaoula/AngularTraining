import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Hero } from "./models/hero.interface";
import { HEROES } from "./mock.heroes";
import { MessagesService } from "../messages.service";

@Injectable({
    providedIn: 'root'
})

export class HeroService{
    //This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
    constructor(private messageService: MessagesService, private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    private heroesUrl = 'api/heroes'; 

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
      }
    
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
          .pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
          );
    };
    
    getHero(id: number): Observable<Hero>{
        const heroIdUrl = `${this.heroesUrl}/${id}`
        return this.http.get<Hero>(heroIdUrl).pipe(
            tap(_=> this.log("fetched hero")),
            catchError(this.handleError<Hero>('getHero id=${id}'))
            )
        }
        
        private handleError<T>(operation = 'operation', result?: T) {
            return (error: any): Observable<T> => {
                console.error(error); 
                this.log(`${operation} failed: ${error.message}`);
                return of(result as T);
            };
        }
        
        updateHero(hero: Hero): Observable<any>{
            return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
                tap(_ => this.log(`updated hero id=${hero.id}`)),
                catchError(this.handleError<any>('updateHero')));
        };

}
