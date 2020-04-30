import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({ 
    templateUrl: './product-create.component.html',
    providers: [ProductService]
})
export class ProductCreateComponent {
    product: Product = new Product();

    constructor(private productService: ProductService, private router: Router) { }

    save() {        
        this.product.unitId = +this.product.unitId;
        return this.productService.createProduct(this.product).subscribe(() => this.router.navigateByUrl("/"));               
    }
}