import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Unit } from '../../models/unit';
import { UnitService } from '../../services/unit.service';

@Component({
    selector: "product-form",
    templateUrl: './product-form.component.html',
    providers: [UnitService]
})
export class ProductFormComponent {

    @Input() product: Product;
    @Input() file: FormData = new FormData();
    units: Unit[];

    constructor(private unitService: UnitService) { }
    ngOnInit() { 
        this.load();
    }
    load() {
        this.unitService.getUnits().subscribe((data: Unit[]) => this.units = data);
    } 
    onFileSelected(event) {
        const f: File = <File>event.target.files[0];
        this.file.append('image', f, f.name); 
    }
}