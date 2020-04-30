import { Component, OnInit } from '@angular/core'    
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category'

@Component({
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css'],
    providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {

    categories: Category[];
    constructor(private categoryService: CategoryService) { }
     
    ngOnInit() {
        this.load();  
    }
    load() {
        this.categoryService.getCategories().subscribe((data: Category[]) => this.categories = data);
    }     
}