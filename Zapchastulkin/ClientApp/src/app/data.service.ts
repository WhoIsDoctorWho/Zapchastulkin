import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Category } from './models/category';
import { Unit } from './models/unit';

@Injectable()
export class DataService {

    private productsUrl = '/api/products';
    private unitsUrl = '/api/units';
    private categoriesUrl = '/api/categories';     
    private uploadFilesUrl = '/api/upload';      

    constructor(private http: HttpClient) {
    } 

    createProduct(product: Product) {
        return this.http.post(this.productsUrl, product);
    }
    createUnit(unit: Unit) {
        return this.http.post(this.unitsUrl, unit);
    }
    createCategory(category: Category) { 
        return this.http.post(this.categoriesUrl, category);
    }

    getProduct(productId: number) {
        return this.http.get(this.productsUrl + '/'  + productId);
    }
    getProducts(unitId: number) {
        return this.http.get(this.unitsUrl + '/' + unitId);
    }
    getUnits(categoryId: number) {
        return this.http.get(this.categoriesUrl + '/' + categoryId);
    }
    getCategories() {
        return this.http.get(this.categoriesUrl);
    }

    updateProduct(product: Product, unitName: string) {
        return this.http.put(this.productsUrl, { product, unitName });
    }
    updateUnit(unit: Unit, categoryName: string) {
        return this.http.post(this.unitsUrl, { unit, categoryName });
    }
    updateCategory(category: Category) {
        return this.http.post(this.categoriesUrl, category);
    }


    deleteProduct(id: number) {
        return this.http.delete(this.productsUrl + '/' + id);
    }
    deleteUnit(id: number) {
        return this.http.delete(this.unitsUrl + '/' + id);
    }
    deleteCategory(id: number) {
        return this.http.delete(this.categoriesUrl + '/' + id);
    }

    uploadPhoto(fd: FormData) {
        return this.http.post(this.uploadFilesUrl, fd);
    }        
}