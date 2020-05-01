import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
    templateUrl: './category-update.component.html',
    providers: [CategoryService]
})
export class CategoryUpdateComponent implements OnInit {
    categoryId: number;
    category: Category = new Category();
    loaded: boolean = false;

    constructor(private categoryService: CategoryService, private router: Router, activeRoute: ActivatedRoute) {
        this.categoryId = +activeRoute.snapshot.params["id"];
    }
    ngOnInit(): void {
        if (this.categoryId)
            this.categoryService
                .getCategory(this.categoryId)
                .subscribe((data: Category) => {
                    this.category = data;
                    if (this.category != null)
                        this.loaded = true;
                });
    }

    save() {        
        this.categoryService.updateCategory(this.category)
            .subscribe(() => this.router.navigateByUrl("/"));
    }

} 