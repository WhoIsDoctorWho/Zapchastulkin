import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';
import { FileService } from '../../services/file.service';

@Component({
    templateUrl: './unit-create.component.html',
    providers: [FileService, UnitService]
})
export class UnitCreateComponent {
    unit: Unit = new Unit();
    file: FormData = new FormData();
 
    constructor(private unitService: UnitService, private fileService: FileService, private router: Router) { }

    save() {
        this.fileService.uploadPhoto(this.file)
            .subscribe(data => { 
                this.unit.imageUrl = data.toString();
                this.unit.categoryId = +this.unit.categoryId;                 
                return this.unitService.createUnit(this.unit).subscribe(data => {
                    return this.router.navigateByUrl("/");
                })
            });
    } 
} 