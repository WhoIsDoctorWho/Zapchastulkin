import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Unit } from '../models/unit';

@Component({
    templateUrl: './unit-list.component.html',
    styleUrls: ['./unit-list.component.css'],
    providers: [DataService]
})
export class UnitListComponent implements OnInit {
    categoryId: number;
    units: Unit[];
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.categoryId = Number.parseInt(activeRoute.snapshot.params["id"]);
    }    
    ngOnInit() {
        if (this.categoryId)
            this.dataService.getUnits(this.categoryId)
                .subscribe((data: Unit[]) => { this.units = data; this.loaded = true; });
    }    
} 