import { Component, OnInit } from "@angular/core";

import { CartService } from "../cart.service";
import { Product } from "../models/product.interface";

@Component({
    selector: 'app-cart',
    templateUrl: 'app-cart.component.html',
    styleUrls: ['app-cart.component.css']
})

export class AppCartComponent implements OnInit{
    
    constructor(private cartItems: CartService){}

    checkoutForm = ({
        name: '',
        address: ''
    });
    ngOnInit(): void {
        
    }
    getItems(): Product[]{
        return this.cartItems.getItems();
    }

    onSubmit(){
        this.cartItems.clearItems();
        console.warn('Your order has been submitted', this.checkoutForm);
    }
}