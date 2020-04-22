import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Category } from '../models/category';

@Component({
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css'],
    providers: [DataService]
})
export class CategoryListComponent implements OnInit {

    categories: Category[];
    constructor(private dataService: DataService) { }
     
    ngOnInit() {
        this.load();  
    }
    load() {
        this.dataService.getCategories().subscribe((data: Category[]) => this.categories = data);
    }     
}