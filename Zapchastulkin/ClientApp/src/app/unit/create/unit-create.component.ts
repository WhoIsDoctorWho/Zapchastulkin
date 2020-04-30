import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';

@Component({
    templateUrl: './unit-create.component.html',
    providers: [UnitService]
})
export class UnitCreateComponent {
    unit: Unit = new Unit();
 
    constructor(private unitService: UnitService, private router: Router) { }

    save() {                
        this.unit.categoryId = +this.unit.categoryId;                 
        return this.unitService.createUnit(this.unit).subscribe(() => this.router.navigateByUrl("/"));
    } 
} 