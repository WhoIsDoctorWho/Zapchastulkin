import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private api = '/api';

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.api + '/categories');
    }
    getUnits(categoryId: number) {
        return this.http.get(this.api + '/categories/' + categoryId);
        //return this.http.get("api/categories");        
    }    
    getProducts(unitId: number) {
        return this.http.get(this.api + '/units/' + unitId);
    }
    getProduct(productId: number) {
        return this.http.get(this.api + '/products/' + productId);
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