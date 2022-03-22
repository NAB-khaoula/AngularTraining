import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


import { Product } from "../models/product.interface";
import { PRODUCTS } from "../mock.product";
import { CartService } from "../cart.service";


@Component({
    selector:'app-product-details',
    templateUrl: 'app-product-details.component.html',
    styleUrls: ['app-product-details.component.css']
})

export class AppProductDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private cartService: CartService){}

    product?: Product;
    
    ngOnInit(): void {
        this.getProduct();
    }
    
    getProduct(){
        this.product =  PRODUCTS.find(h => h.id === Number(this.route.snapshot.paramMap.get('id')));
    }

    addToCart(item: Product){
        if(this.cartService.getItems().indexOf(item) === -1)
        {
            this.cartService.addItem(item);
            alert('The item has been added!');
        }
        else
            alert('You\'ve already added this item')
    }

}