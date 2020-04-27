import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { DataService } from '../../data.service';
import { Unit } from '../../models/unit';

@Component({
    selector: "product-form",
    templateUrl: './product-form.component.html',
    providers: [DataService]
})
export class ProductFormComponent {

    @Input() product: Product;
    @Input() file: FormData = new FormData();
    units: Unit[];

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getUnits(-1).subscribe((data: Unit[]) => this.units = data);
    } 
    onFileSelected(event) {
        const f: File = <File>event.target.files[0];
        this.file.append('image', f, f.name);
    }
}