import { Product } from "./Product";

export class Cart {
    product: Product;
    amount: number;
    constructor(product: Product, amount: number) {
        this.product = product;
        this.amount = amount;
    }
}