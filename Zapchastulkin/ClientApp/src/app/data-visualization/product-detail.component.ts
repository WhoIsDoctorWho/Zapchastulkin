import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../models/product';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    providers: [DataService]
})
export class ProductDetailComponent implements OnInit {
    productId: number;
    product: Product;
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.productId = Number.parseInt(activeRoute.snapshot.params["productId"]);
    }

    ngOnInit() {
        if (this.productId)
            this.dataService.getProduct(this.productId)
                .subscribe((data: Product) => { this.product = data; this.loaded = true; });
    }

}