import { Product } from "./product";

export class Unit {
    public id?: number;
    public categoryFK ?: number;
    public name ?: string;
    public imageUrl ?: string;
    public products ?: Product[];
}