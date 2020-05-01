import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unit } from '../models/unit';

@Injectable()
export class UnitService {    
    private url = '/api/units';   

    constructor(private http: HttpClient) {
    }
    
    createUnit(unit: Unit) {
        return this.http.post(this.url, unit);
    }

    getUnits() {
        return this.http.get(this.url);
    }
    
    getUnit(unitId: number) {
        return this.http.get(this.url + '/' + unitId);
    }

    updateUnit(unit: Unit) {
        return this.http.put(this.url, unit);
    }
    
    deleteUnit(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

}