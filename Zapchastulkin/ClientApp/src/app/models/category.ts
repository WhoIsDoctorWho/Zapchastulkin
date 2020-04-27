import { Unit } from "./unit";

export class Category {
    public id ?: number;
    public name ?: string;
    public imageUrl?: string;    
    public units?: Unit[];
}