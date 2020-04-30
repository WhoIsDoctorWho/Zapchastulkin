import { Component, Input } from '@angular/core';
import { Unit } from '../../models/unit';
import { Category } from '../../models/category';
import { DataService } from '../../data.service';

@Component({
    selector: "unit-form",
    templateUrl: './unit-form.component.html',
    providers: [DataService]
})
export class UnitFormComponent {

    @Input() unit: Unit;
    @Input() file: FormData = new FormData();
    
    categories: Category[];

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getCategories().subscribe((data: Category[]) => this.categories = data);
    }  
    onFileSelected(event) {
        const f: File = <File>event.target.files[0];
        this.file.append('image', f, f.name);
    }
}