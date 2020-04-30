import { Component, Input } from '@angular/core';
import { Unit } from '../../models/unit';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: "unit-form",
    templateUrl: './unit-form.component.html',
    providers: [CategoryService]
})
export class UnitFormComponent {

    @Input() unit: Unit;
    @Input() file: FormData = new FormData();
    
    categories: Category[];

    constructor(private categoryService: CategoryService) { }
    ngOnInit() {
        this.load();
    }
    load() {
        this.categoryService.getCategories().subscribe((data: Category[]) => this.categories = data);
    }  
    onFileSelected(event) {
        const f: File = <File>event.target.files[0];
        this.file.append('image', f, f.name);
    }
}