import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { Product } from "./models/product.interface";


@Injectable({
    providedIn: 'root'
})


export class CartService{
    
    items: Product[] = [];

    constructor(private http: HttpClient){
    }

    getItems(): Product[] {
        return this.items;
    };

    addItem(item: Product): void{
        this.items = [...this.items, item];
    }

    clearItems(): void{
        this.items = [];
    }

    getShippingPrices(){
        return this.http.get<{type: string, price: number}[]>('/assets/Shipping.json');
    }
}