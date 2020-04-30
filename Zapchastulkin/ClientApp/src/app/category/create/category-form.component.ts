import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';

@Component({
    selector: "category-form",
    templateUrl: './category-form.component.html',
})
export class CategoryFormComponent {

    @Input() category: Category;    

    setImageUrl(path: string) {
        this.category.imageUrl = path;
    }
}