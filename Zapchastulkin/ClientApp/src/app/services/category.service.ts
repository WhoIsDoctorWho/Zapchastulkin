import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    
    private url = '/api/categories';

    constructor(private http: HttpClient) {}

    createCategory(category: Category) {
        return this.http.post(this.url, category);
    }

    getCategories() {
        return this.http.get(this.url);
    }

    getCategory(categoryId: number) {
        return this.http.get(this.url + '/' + categoryId);
    }

    updateCategory(category: Category) {
        return this.http.put(this.url, category);
    }

    deleteCategory(id: number) {
        return this.http.delete(this.url+ '/' + id);
    }

}