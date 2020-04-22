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

    units: Unit[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getCategory(1).subscribe((data: Unit[]) => this.units = data); // @todo
    }
} 