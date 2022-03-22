import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "../cart.service";

@Component({
    selector: 'app-shipping',
    templateUrl: './app-shipping.component.html',
    styleUrls: ['./app-shipping.component.css']
})

export class AppShippingComponent{
    
    constructor(private cartService: CartService){
    }

    shippingCosts = this.cartService.getShippingPrices();

}