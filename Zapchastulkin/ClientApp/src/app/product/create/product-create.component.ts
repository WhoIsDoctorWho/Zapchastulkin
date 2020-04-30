import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FileService } from '../../services/file.service';

@Component({ 
    templateUrl: './product-create.component.html',
    providers: [ProductService, FileService]
})
export class ProductCreateComponent {
    product: Product = new Product();
    file: FormData = new FormData();

    constructor(private productService: ProductService, private fileService: FileService, private router: Router) { }

    save() {
        this.fileService.uploadPhoto(this.file)
            .subscribe(data => {
                this.product.imageUrl = data.toString();
                this.product.unitId = +this.product.unitId;
                return this.productService.createProduct(this.product).subscribe(data => {
                    return this.router.navigateByUrl("/");
                })
            });

    }
}