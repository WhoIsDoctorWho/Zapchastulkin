import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category';
import { Unit } from './models/unit';
import { Product } from './models/product';

@Injectable()
export class DataService {

    private url = "/api/categories";

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.url);
    }
    getCategory(id: number) {
        return this.http.get(this.http + '/' + id);
    }

    //getProducts() {
    //    return this.http.get(this.url);
    //}

    //getProduct(id: number) {
    //    return this.http.get(this.url + '/' + id);
    //}

    //createProduct(product: Product) {
    //    return this.http.post(this.url, product);
    //}
    //updateProduct(product: Product) {

    //    return this.http.put(this.url, product);
    //}
    //deleteProduct(id: number) {
    //    return this.http.delete(this.url + '/' + id);
    //}
}