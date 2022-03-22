import { Component, OnInit } from "@angular/core";

import { Product } from "../models/product.interface";
import { PRODUCTS } from "../mock.product";

@Component({
    selector:'app-product-list',
    templateUrl: './app-product-list.component.html',
    styleUrls: ['./app-product-list.component.css']
})


export class AppProductListComponent implements OnInit{
    
    constructor(){

    }
    
    products: Product[] = PRODUCTS;

    ngOnInit(): void {
    }
    
    share(){
        alert('the product has been shared!');
    }
    NotifyMe(){
        alert('You will be notified when the product goes on sale');
    }

}