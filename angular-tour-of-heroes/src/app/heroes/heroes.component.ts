import { Component, OnInit, EventEmitter } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  };
  hero: Hero[] = [{
    name: 'Windstorm',
    id: 1
  }];
  searchHero: Hero[] = [];
  item: string = '';
  searchItem: string = '';
  onInputHandler(){
    if(this.item){
      this.hero = [...this.hero, {name:this.item,id: this.hero.length + 1}];
      this.item = '';
    }
  };
}
