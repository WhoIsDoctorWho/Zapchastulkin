import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';
//import { DataService } from '../../data.service';

@Component({
    selector: "category-form",
    templateUrl: './category-form.component.html',
  //  providers: [DataService]
})
export class CategoryFormComponent {

    @Input() category: Category;
    @Input() file: FormData = new FormData();

    onFileSelected(event) {
        const f: File = <File>event.target.files[0];
        this.file.append('image', f, f.name);
    }
}