import { Component, OnInit, EventEmitter } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  };
  heroes: Hero[]= HEROES;
  // searchHero: Hero[] = [];
  item: string = '';
  searchItem: string = '';
  onInputHandler(){
    if(this.item){
      this.heroes = [...this.heroes, {name:this.item,id: this.heroes.length + 1}];
      this.item = '';
    }
  };
}
