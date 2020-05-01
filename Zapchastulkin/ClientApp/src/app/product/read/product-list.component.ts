import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { UnitService } from '../../services/unit.service';
import { Unit } from '../../models/unit';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService, UnitService]
})
export class ProductListComponent implements OnInit {
    unitId: number;
    products: Product[];
    loaded: boolean = false;

    constructor(private productService: ProductService, private unitService: UnitService, activeRoute: ActivatedRoute) {
        this.unitId = +activeRoute.snapshot.params["id"];
    }    

    ngOnInit() {
        if (this.unitId)
            this.unitService.getUnit(this.unitId)
                .subscribe((unit: Unit) => { this.products = unit.products; this.loaded = true; });
        else
            this.productService.getProducts()
                .subscribe((data: Product[]) => { this.products = data; this.loaded = true; });
               
    }
}