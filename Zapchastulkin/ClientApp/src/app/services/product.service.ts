import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    private url = '/api/products';

    constructor(private http: HttpClient) {
    }

    createProduct(product: Product) {
        return this.http.post(this.url, product);
    } 

    getProduct(productId: number) {
        return this.http.get(this.url + '/' + productId);
    }
    getProducts() {
        return this.http.get(this.url);
    }

    updateProduct(product: Product) {
        return this.http.put(this.url, product);
    }

    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

}