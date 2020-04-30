import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {

    private url = '/api/upload';

    constructor(private http: HttpClient) {}
    
    uploadPhoto(fd: FormData) {
        return this.http.post(this.url, fd);
    }
}