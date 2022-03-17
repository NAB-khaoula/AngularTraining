import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../../models/hero.interface";

@Component({
    selector: 'heroes-details',
    templateUrl: './heroes-details.component.html',
    styleUrls: ['./heroes-details.component.scss']
})

export class HeroesDetailsComponent implements OnInit{

    @Input()
    items: Hero[] = [];
    ngOnInit(): void {
    }

}