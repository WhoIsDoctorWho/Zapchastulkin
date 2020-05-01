import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
    templateUrl: './product-update.component.html',
    providers: [ProductService]
})
export class ProductUpdateComponent implements OnInit {
    productId: number;
    product: Product = new Product();
    loaded: boolean = false;

    constructor(private productService: ProductService, private router: Router, activeRoute: ActivatedRoute) {
        this.productId = +activeRoute.snapshot.params["id"];
    }
    ngOnInit(): void {
        if (this.productId)
            this.productService
                .getProduct(this.productId)
                .subscribe((data: Product) => {
                    this.product = data;
                    if (this.product != null)
                        this.loaded = true;
                });
    }

    save() {
        this.product.unitId = +this.product.unitId;
        this.productService.updateProduct(this.product)
            .subscribe(() => this.router.navigateByUrl("/"));
    }

} 