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

		addHero(hero: Hero): Observable<Hero> {
			return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
			  tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
			  catchError(this.handleError<Hero>('addHero'))
			);
		  }
		
		deleteHero(id: number): Observable<Hero> {
			const url = `${this.heroesUrl}/${id}`;
			
			return this.http.delete<Hero>(url, this.httpOptions).pipe(
			  tap(_ => this.log(`deleted hero id=${id}`)),
			  catchError(this.handleError<Hero>('deleteHero'))
			);
		}
		searchHeroes(term: string): Observable<Hero[]> {
			if (!term.trim()) {
				return of([]);
			}
			return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
				tap(x => x.length ?
					this.log(`found heroes matching "${term}"`) :
					this.log(`no heroes matching "${term}"`)),
				catchError(this.handleError<Hero[]>('searchHeroes', []))
			);
		}
}
