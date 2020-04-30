import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
    templateUrl: './category-create.component.html',
    providers: [CategoryService]    
})
export class CategoryCreateComponent {
    category: Category = new Category();    
     
    constructor(private categoryService: CategoryService, private router: Router) { }

    save() {        
        this.categoryService.createCategory(this.category).subscribe(() => this.router.navigateByUrl("/"));        
    }
 
} 