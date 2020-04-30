import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
    productId: number;
    product: Product;
    loaded: boolean = false;

    constructor(private productService: ProductService, activeRoute: ActivatedRoute) {
        this.productId = +activeRoute.snapshot.params["id"];

    }

    ngOnInit() {
        if (this.productId)
            this.productService.getProduct(this.productId)
                .subscribe((data: Product) => { this.product = data; this.loaded = true; });
    }

}