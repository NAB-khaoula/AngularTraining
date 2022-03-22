import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "../models/product.interface";

@Component({
    selector: 'app-product-alert',
    templateUrl: './app-product-alert.component.html',
    styleUrls: ['./app-product-alert.component.css']
})

export class AppProductAlertComponent implements OnInit{

    @Input()
    product?: Product;
    
    @Output()
    notify = new EventEmitter();

    ngOnInit(): void {
        
    }

}