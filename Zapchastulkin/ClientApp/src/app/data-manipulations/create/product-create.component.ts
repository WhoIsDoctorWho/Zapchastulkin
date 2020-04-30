import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Product } from '../../models/product';

@Component({ 
    templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
    product: Product = new Product();
    file: FormData = new FormData();

    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.uploadPhoto(this.file)
            .subscribe(data => {
                this.product.imageUrl = data.img;
                this.product.unitId = +this.product.unitId;
                return this.dataService.createProduct(this.product).subscribe(data => {
                    return this.router.navigateByUrl("/");
                })
            });

    }
}