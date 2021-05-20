import { Category } from "./Category";

export class Product {
    added: string;
    description: string;
    id: number;
    imageUrl: string;
    name: string;
    price:number;
    productCategory: Category[];
    year:number;
}