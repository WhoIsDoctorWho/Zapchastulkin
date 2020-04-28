import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Unit } from '../../models/unit';
import { Product } from '../../models/product';

@Component({
    templateUrl: './unit-create.component.html'
})
export class UnitCreateComponent {
    unit: Unit = new Unit();
    file: FormData = new FormData();

    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.uploadPhoto(this.file)
            .subscribe(data => { 
                this.unit.imageUrl = data.img;
                this.unit.products = null;
                return this.dataService.createUnit(this.unit).subscribe(data => {
                    return this.router.navigateByUrl("/");
                })
            });
    }
} 