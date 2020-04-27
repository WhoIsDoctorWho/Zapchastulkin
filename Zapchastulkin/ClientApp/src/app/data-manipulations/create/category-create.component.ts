import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Category } from '../../models/category';

@Component({
    templateUrl: './category-create.component.html'
})
export class CategoryCreateComponent {
    category: Category = new Category();
    file: FormData = new FormData();

    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.uploadPhoto(this.file)
            .subscribe(data => {
                this.category.imageUrl = data.img;
                return this.dataService.createCategory(this.category).subscribe(data => {
                    return this.router.navigateByUrl("/");
                })
            });

    }
}