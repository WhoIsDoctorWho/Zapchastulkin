﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
    templateUrl: './unit-list.component.html',
    styleUrls: ['./unit-list.component.css'],
    providers: [UnitService, CategoryService]
})
export class UnitListComponent implements OnInit {
    categoryId: number;
    units: Unit[];
    loaded: boolean = false;

    constructor(private unitService: UnitService, private categoryService: CategoryService, activeRoute: ActivatedRoute) {
        this.categoryId = +activeRoute.snapshot.params["id"];
    }    
    ngOnInit() {
        if (this.categoryId)   
            this.categoryService.getCategory(this.categoryId)
                .subscribe((category: Category) => {
                    this.units = category.units; this.loaded = true;
                });
        else
            this.unitService.getUnits()
            .subscribe((data: Unit[]) => { this.units = data; this.loaded = true; });
    }    
} 