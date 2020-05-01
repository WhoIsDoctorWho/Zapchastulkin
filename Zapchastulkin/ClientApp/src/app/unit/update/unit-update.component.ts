import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';

@Component({
    templateUrl: './unit-update.component.html',
    providers: [UnitService]
})
export class UnitUpdateComponent implements OnInit {
    unitId: number;
    unit: Unit = new Unit();
    loaded: boolean = false;

    constructor(private unitService: UnitService, private router: Router, activeRoute: ActivatedRoute) {
        this.unitId = +activeRoute.snapshot.params["id"];
    }
    ngOnInit(): void {
        if (this.unitId)
            this.unitService
                .getUnit(this.unitId)
                .subscribe((data: Unit) => {
                    this.unit = data;
                    if (this.unit != null)
                        this.loaded = true;
                });
    }

    save() {
        this.unit.categoryId = +this.unit.categoryId;                 
        this.unitService.updateUnit(this.unit)
            .subscribe(() => this.router.navigateByUrl("/"));
    }

} 