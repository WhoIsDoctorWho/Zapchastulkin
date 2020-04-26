import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [DataService]
})
export class ProductListComponent implements OnInit {
    unitId: number;
    products: Product[];
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.unitId = Number.parseInt(activeRoute.snapshot.params["id"]);
    }    

    ngOnInit() {
        if (this.unitId)
            this.dataService.getProducts(this.unitId)
                .subscribe((data: Product[]) => { this.products = data; this.loaded = true; });
    }
}